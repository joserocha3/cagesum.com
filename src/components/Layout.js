import { Box } from '@chakra-ui/core'

import Meta from '@components/Meta'
import Header from '@components/Header'

const Layout = ({ image, title, description, children }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <Header />
      <Box as="main">{children}</Box>
    </>
  )
}

export default Layout
