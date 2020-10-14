import gql from 'graphql-tag'
import shuffle from 'lodash.shuffle'

const GET_QUOTES = gql`
  query GetText {
    quote {
      text
    }
  }
`

const generate = async (req, res) => {
  console.log('test')
  const { body: amount } = req

  const query = GET_QUOTES.loc.source.body

  const response = await fetch('https://api.cagesum.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const quotes = shuffle((await response.json?.())?.data?.quote || [])

  let paragraphs = ''
  quotes.forEach((q) => (paragraphs += `${q.text} `))

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json({ paragraphs })
}

export default generate
