import gql from 'graphql-tag'
import shuffle from 'lodash.shuffle'
import fetch from 'node-fetch'

const GET_QUOTES = gql`
  query GetQuotes($numberOfParagraphs: Int!) {
    quote(limit: $numberOfParagraphs) {
      text
    }
  }
`

const generate = async (req, res) => {
  const { numberOfParagraphs = 1 } = req.body.input

  const response = await fetch('https://api.cagesum.com/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: GET_QUOTES,
      variables: { numberOfParagraphs },
    }),
  })

  const result = await response.json()
  console.log('DEBUG result: ', result)

  const { data, errors } = result()

  if (errors) {
    return res.status(400).json(errors[0])
  }

  let paragraphs = ''
  shuffle(data?.quote || []).forEach((q) => (paragraphs += `${q.text} `))
  console.log('DEBUG paragraphs: ', paragraphs)

  return res.json({ paragraphs })
}

export default generate
