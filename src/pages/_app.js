import Chakra from '@components/Chakra'

const App = ({ Component, pageProps }) => {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default App
