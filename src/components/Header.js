import { Container, Link } from '@chakra-ui/core'

const Header = () => {
  return (
    <Container as="header" textAlign="right" py={3}>
      Made by&nbsp;
      <Link isExternal href="https:/pablorocha.me">
        Pablo Rocha
      </Link>
    </Container>
  )
}

export default Header
