import { Box, Container, Heading, Image, Link } from '@chakra-ui/core'

const Header = () => {
  return (
    <Box
      position="relative"
      bg="linear-gradient(242deg, #eddde3 16%, #9aadc9 67%);"
      pb={8}
    >
      <Container as="header" textAlign="right" py={3}>
        Made by&nbsp;
        <Link
          isExternal
          href="https://pablorocha.me/?utm_source=cagesum_website&utm_medium=header_link&utm_campaign=cagesum"
        >
          Pablo Rocha
        </Link>
      </Container>

      <Heading as="h1" fontSize={[60, 90, 130]} textAlign="center">
        Cagesum
      </Heading>

      <Heading
        as="h2"
        fontSize={[25, 30, 35]}
        textAlign="center"
        opacity={0.7}
        maxW={600}
        margin="auto"
        mt={4}
        px={3}
      >
        The world's first Nicolas Cage text placeholder generator
      </Heading>

      <Image
        src="/img/free.jpg"
        maxH={[200, 250, 300]}
        margin="auto"
        mt={8}
        boxShadow="2xl"
        borderRadius="sm"
        alt="nic cage in con air"
        ignoreFallback
      />
    </Box>
  )
}

export default Header
