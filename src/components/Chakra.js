import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/core'

import theme from '@lib/theme'

const Chakra = ({ cookies, children }) => {
  const colorModeManager = cookies
    ? cookieStorageManager(cookies)
    : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme} resetCSS>
      {children}
    </ChakraProvider>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}

export default Chakra
