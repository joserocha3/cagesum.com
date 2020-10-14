import { Box } from '@chakra-ui/core'

import Meta from '@components/Meta'
import Header from '@components/Header'

const Layout = ({ image, title, description, children }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <Header />
      <Box as="main">{children}</Box>
      {/* TODO: add footer with attribution to https://www.behance.net/gallery/84918429/Nicolas-Cage?tracking_source=search_projects_recommended%7CNicolas%20Cage */}
    </>
  )
}

export default Layout
