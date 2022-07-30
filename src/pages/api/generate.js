import gql from 'graphql-tag'
import shuffle from 'lodash.shuffle'
import fetch from 'node-fetch'

const GET_QUOTES = gql`
  query GetQuotes($limit: Int!, $offset: Int!, $orderDirection: order_by!) {
    quote(limit: $limit, offset: $offset, order_by: { text: $orderDirection }) {
      text
    }
  }
`

const NUMBER_OF_PARAGRAPHS = 1
const QUOTES_PER_PARAGRAPH = 3
const QUOTES_IN_DB = 42

const getRandomOffset = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const getRandomDirection = () => {
  return ['asc', 'desc'][Math.floor(Math.random() * 2)]
}

const generate = async (req, res) => {
  const numberOfParagraphs =
    req?.body?.input?.numberOfParagraphs || NUMBER_OF_PARAGRAPHS
  const quotesPerParagraph =
    req?.body?.input?.quotesPerParagraph || QUOTES_PER_PARAGRAPH

  const numberOfQuotes =
    numberOfParagraphs * quotesPerParagraph > QUOTES_IN_DB
      ? QUOTES_IN_DB
      : numberOfParagraphs * quotesPerParagraph

  const response = await fetch('https://api.cagesum.com/v1/graphql', {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: GET_QUOTES.loc.source.body,
      variables: {
        limit: numberOfQuotes,
        offset: getRandomOffset(QUOTES_IN_DB - numberOfQuotes),
        orderDirection: getRandomDirection(),
      },
    }),
  })

  const { data, errors } = await response.json()

  if (errors) {
    return res.status(400).json(errors[0])
  }

  let paragraphs = ''
  shuffle(data?.quote || []).forEach((q, index) => {
    paragraphs = paragraphs +=
      (index + 1) % quotesPerParagraph === 0 ? `${q.text}\n\n` : `${q.text} `
  })

  return res.json({ paragraphs })
}

export default generate
