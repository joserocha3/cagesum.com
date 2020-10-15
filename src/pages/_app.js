import { useEffect } from 'react'
import Chakra from '@components/Chakra'

import GTMPageView from '@lib/gtm'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url)
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default App
