import Head from 'next/head'

const TITLE = 'Cagesum'
const DESCRIPTION = 'Nicolas Cage text placeholder generator'
const IMAGE = 'https://pablorocha.me/assets/img/headshot.jpg'
const URL = 'https://cagesum.com'

function makeSchema() {
  return [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        // '@context': 'http://schema.org',
        // '@type': 'Person',
        // name: 'Jose Pablo Rocha, Jr.',
        // image: IMAGE,
        // jobTitle: 'Software Engineer',
        // gender: 'male',
        // address: {
        //   '@type': 'PostalAddress',
        //   addressLocality: 'Edinburg',
        //   addressRegion: 'TX',
        //   postalCode: '78539',
        //   addressCountry: 'United States',
        // },
        // email: 'hello@pablorocha.me',
        // birthDate: '1984-08-16',
        // alumniOf: 'University of Texas Pan American',
        // birthPlace: 'Illinois',
        // sameAs: [
        //   'https://twitter.com/jprocha101',
        //   'https://www.facebook.com/jprocha101',
        //   'https://github.com/joserocha3',
        //   'https://instagram.com/jprocha101',
        //   'https://www.linkedin.com/in/jprocha101',
        // ],
        // url: URL,
      }),
    },
  ]
}

const Meta = ({ title, description, image }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      {/* HTML Meta Tags */}
      <title>{title || "Pablo Rocha's Technology, Blog and Portfolio"}</title>
      <meta name="description" content={description || DESCRIPTION} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || TITLE} />
      <meta property="og:description" content={description || DESCRIPTION} />
      <meta property="og:image" content={image || IMAGE} />

      {/* Twitter Meta Tags */}
      <meta property="twitter:url" content={URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || TITLE} />
      <meta name="twitter:description" content={description || DESCRIPTION} />
      <meta name="twitter:image" content={image || IMAGE} />

      <script
        key="ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makeSchema()) }}
      />
    </Head>
  )
}

export default Meta
