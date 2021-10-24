import Script from 'next/script'
import { GA_MEASUREMENT_ID } from '../lib/gtag'

export default function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="beforeInteractive" />
      <Script strategy="beforeInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());    
        gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
