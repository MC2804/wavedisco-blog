import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getDb() {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("REPLACE")) {
    throw new Error("DATABASE_URL not configured");
  }
  return neon(process.env.DATABASE_URL);
}

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 });
  }

  try {
    const sql = getDb();
    await sql`INSERT INTO blog_contacts (name, email, message) VALUES (${name.trim()}, ${email.trim()}, ${message.trim()})`;
  } catch {
    return NextResponse.json({ error: "DB not configured" }, { status: 503 });
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "blog@wavedisco.com",
        to: "hello@wavedisco.com",
        subject: `New message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      });
    } catch {
      // Email notification failed — message still saved to DB
    }
  }

  return NextResponse.json({ success: true });
}
