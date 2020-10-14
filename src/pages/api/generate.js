import gql from 'graphql-tag'
import shuffle from 'lodash.shuffle'
import fetch from 'node-fetch'

const GET_QUOTES = gql`
  query GetQuotes($limit: Int!) {
    quote(limit: $limit) {
      text
    }
  }
`

const QUOTES_PER_PARAGRAPH = 5

const generate = async (req, res) => {
  const { numberOfParagraphs = 1 } = req?.body?.input

  const numberOfQuotes = numberOfParagraphs * QUOTES_PER_PARAGRAPH

  const response = await fetch('https://api.cagesum.com/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: GET_QUOTES.loc.source.body,
      variables: { limit: numberOfQuotes },
    }),
  })

  const { data, errors } = await response.json()

  if (errors) {
    return res.status(400).json(errors[0])
  }

  let paragraphs = ''
  shuffle(data?.quote || []).forEach((q, index) => {
    paragraphs = paragraphs +=
      (index + 1) % QUOTES_PER_PARAGRAPH === 0 ? `${q.text}\n\n` : `${q.text} `
  })

  return res.json({ paragraphs })
}

export default generate
