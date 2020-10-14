import { extendTheme } from '@chakra-ui/core'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', '#0E141B')(props),
        color: mode('#2A2C2D', 'white')(props),
        fontSize: 16,
      },
      p: {
        lineHeight: 'tall',
        fontSize: 'lg',
      },
      a: {
        borderBottom: 'dotted 1px black',
        _hover: { textDecoration: 'unset' },
      },
    }),
  },
})

export default theme
