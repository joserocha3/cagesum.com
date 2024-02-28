import { Box } from '@chakra-ui/core'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout = ({ image, title, description, children }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  )
}

export default Layout
