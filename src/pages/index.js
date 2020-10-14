import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Text,
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

  const handleParagraphChange = (value) => {
    setNumberOfParagraphs(value)
  }

  const handleQuotesChange = (value) => {
    setQuotesPerParagraph(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setParagraphs(null)
    setError(null)
    setIsLoading(true)

    try {
      const data = await http('/api/generate', {
        input: { numberOfParagraphs, quotesPerParagraph },
      })

      setIsLoading(false)

      if (data?.paragraphs) {
        setParagraphs(data?.paragraphs)
      } else if (data?.error) {
        setError(data?.error)
      } else {
        setError('Something is 🐟-y')
      }
    } catch (e) {
      setIsLoading(false)
      setError(e.toString())
    }
  }

  return (
    <Layout>
      <Container>
        <Heading>Cagesum</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl id="email" mt={4}>
            <Flex
              align="center"
              wrap="wrap"
              justify={['center', 'center', 'flex-start']}
            >
              <Text lineHeight="3rem">Throw</Text>&nbsp;
              <NumberInput
                defaultValue={numberOfParagraphs}
                min={1}
                max={10}
                onChange={handleParagraphChange}
              />
              &nbsp;
              <Text whiteSpace="nowrap">
                {`paragraph${numberOfParagraphs > 1 ? 's' : ''} with`}
              </Text>
              &nbsp;
              <NumberInput
                defaultValue={quotesPerParagraph}
                min={1}
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
              loadingText=""
              p={10}
              isFullWidth
            >
              Get the Cage
            </Button>
          </FormControl>
        </form>

        {paragraphs && (
          <Text mt={4} whiteSpace="break-spaces">
            {paragraphs}
          </Text>
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
