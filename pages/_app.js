import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GoogleAnalytics from '../components/google-analytics'
import * as gtag from '../lib/gtag'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}
