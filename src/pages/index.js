import { useState } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/core'

import Layout from '@components/Layout'

import http from '@lib/http'

const Home = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(1)
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [paragraphs, setParagraphs] = useState()

  const handleChange = (value) => {
    setNumberOfParagraphs(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setParagraphs(null)
    setError(null)
    setIsLoading(true)

    try {
      const data = await http('/api/generate', {
        input: { numberOfParagraphs },
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
            <FormLabel>
              How many paragraphs of the Cage suits your needs?
            </FormLabel>

            <NumberInput
              defaultValue={numberOfParagraphs}
              min={1}
              max={10}
              onChange={handleChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Button mt={4} type="submit" isLoading={isLoading}>
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
