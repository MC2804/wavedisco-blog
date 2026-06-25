import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

function getDb() {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("REPLACE")) {
    throw new Error("DATABASE_URL not configured");
  }
  return neon(process.env.DATABASE_URL);
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  try {
    const sql = getDb();
    const rows = await sql`SELECT slug, count FROM blog_reactions WHERE slug = ${slug}`;
    return NextResponse.json({ slug, count: rows[0]?.count ?? 0 });
  } catch {
    return NextResponse.json({ slug, count: 0 });
  }
}

export async function POST(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  try {
    const sql = getDb();
    const rows = await sql`
      INSERT INTO blog_reactions (slug, count)
      VALUES (${slug}, 1)
      ON CONFLICT (slug)
      DO UPDATE SET count = blog_reactions.count + 1, updated_at = NOW()
      RETURNING slug, count
    `;
    return NextResponse.json({ slug: rows[0].slug, count: rows[0].count });
  } catch {
    return NextResponse.json({ error: "DB not configured" }, { status: 503 });
  }
}
