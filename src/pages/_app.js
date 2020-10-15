import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Chakra from '@components/Chakra'

import GTMPageView from '@lib/gtm'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default App
