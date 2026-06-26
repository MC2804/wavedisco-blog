'use client'
import Script from 'next/script'

export default function Analytics() {
  const ymId = process.env.NEXT_PUBLIC_YM_ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  if (!ymId && !clarityId) return null

  return (
    <>
      {ymId && (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],
            k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script",
            "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${ymId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </Script>
      )}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  )
}
