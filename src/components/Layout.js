import { Box } from '@chakra-ui/core'

import Meta from '@components/Meta'

const Layout = ({ image, title, description, children }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <Box as="main" minH={200}>
        {children}
      </Box>
    </>
  )
}

export default Layout
