const fetch = require('node-fetch')
const gql = require('graphql-tag')
const shuffle = require('lodash.shuffle')

const GET_QUOTES = gql`
  query GetQuotes($numberOfParagraphs: Int!) {
    quote(limit: $numberOfParagraphs) {
      text
    }
  }
`

const execute = async (variables) => {
  const response = await fetch('https://api.cagesum.com/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: GET_QUOTES,
      variables,
    }),
  })

  const data = await response.json()
  console.log('DEBUG execute: ', data)

  return data
}

const handler = async (req, res) => {
  const { numberOfParagraphs = 1 } = req.body.input

  const { data, errors } = await execute({ numberOfParagraphs })

  if (errors) {
    return res.status(400).json(errors[0])
  }

  const quotes = shuffle(data?.quote || [])

  let paragraphs = ''
  quotes.forEach((q) => (paragraphs += `${q.text} `))
  console.log('DEBUG handler: ', paragraphs)

  return res.json({ paragraphs })
}

module.exports = handler
