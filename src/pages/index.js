import { useState, useCallback } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  Flex,
  FormControl,
  Text,
  useClipboard,
} from '@chakra-ui/core'

import Layout from '@components/Layout'
import NumberInput from '@components/NumberInput'

import http from '@lib/http'

const Home = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(1)
  const [quotesPerParagraph, setQuotesPerParagraph] = useState(3)
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [paragraphs, setParagraphs] = useState()
  const { hasCopied, onCopy } = useClipboard(paragraphs)

  const handleParagraphChange = useCallback((event) => {
    setNumberOfParagraphs(event.target.value)
  })

  const handleQuotesChange = useCallback((event) => {
    setQuotesPerParagraph(event.target.value)
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setParagraphs(null)
    setError(null)
    setIsLoading(true)

    try {
      const data = await http('/api/generate', {
        input: { numberOfParagraphs, quotesPerParagraph },
      })

      if (data?.paragraphs) {
        setParagraphs(data?.paragraphs)
      } else {
        setError(data?.error || 'Something is 🐟-y')
      }
    } catch (e) {
      setError(e.toString())
    }

    setIsLoading(false)
  }

  return (
    <Layout>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mt={8}>
            <Flex
              align="center"
              wrap="wrap"
              justify={['center', 'center', 'flex-start']}
            >
              <Text lineHeight="3rem">Throw</Text>&nbsp;
              <NumberInput
                value={numberOfParagraphs}
                max={10}
                onChange={handleParagraphChange}
              />
              &nbsp;
              <Text whiteSpace="nowrap">
                {`paragraph${numberOfParagraphs > 1 ? 's' : ''} with`}
              </Text>
              &nbsp;
              <NumberInput
                value={quotesPerParagraph}
                max={5}
                onChange={handleQuotesChange}
              />
              &nbsp;
              <Text whiteSpace="nowrap">
                {`quote${quotesPerParagraph > 1 ? 's' : ''} each my way!`}
              </Text>
            </Flex>

            <Button
              mt={4}
              type="submit"
              isLoading={isLoading}
              loadingText="beep-boop"
              p={10}
              isFullWidth
              fontSize="2xl"
              boxShadow="lg"
              _focus={{ outline: 'none' }}
            >
              Open the Cage
            </Button>
          </FormControl>
        </form>

        {paragraphs && (
          <Flex direction="column" align="center" mt={8}>
            <Button
              w="fit-content"
              onClick={onCopy}
              boxShadow="md"
              _focus={{ outline: 'none' }}
            >
              {hasCopied ? 'Copied!' : 'Copy'}
            </Button>
            <Text mt={4} whiteSpace="break-spaces">
              {paragraphs}
            </Text>
          </Flex>
        )}

        {error && (
          <Alert mt={4} status="error" borderRadius={100}>
            <AlertIcon />
            <AlertTitle mr={2}>An error occurred!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </Container>
    </Layout>
  )
}

export default Home
