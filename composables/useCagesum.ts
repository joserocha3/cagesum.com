import shuffle from 'lodash/shuffle'

const data = [
  {
    film: 'CITY_OF_ANGELS',
    text: 'He is living. Just not the way you think.',
    created_at: '2020-10-14T21:50:10.819958+00:00',
    updated_at: '2020-10-14T21:50:10.819958+00:00',
    id: 'daf03f3b-3638-4db2-980b-2b9969263d79',
  },
  {
    film: 'THE_WEATHER_MAN',
    text: "I don't predict it. Nobody does, 'cause i-it's just wind. It's wind. It blows all over the place!",
    created_at: '2020-10-13T23:03:25.747183+00:00',
    updated_at: '2020-10-13T23:03:25.747183+00:00',
    id: 'e08426e4-00df-4c91-9d79-b8656893757e',
  },
  {
    film: 'LORD_OF_WAR',
    text: "I believe it's warlord.",
    created_at: '2020-10-13T23:04:34.907424+00:00',
    updated_at: '2020-10-13T23:04:34.907424+00:00',
    id: 'e4f36494-f549-4997-9c3c-d9ec95f3a5db',
  },
  {
    film: 'CITY_OF_ANGELS',
    text: "What's that like? What's it taste like? Describe it like Hemingway.",
    created_at: '2020-10-13T23:05:18.386409+00:00',
    updated_at: '2020-10-13T23:05:18.386409+00:00',
    id: 'a3f534af-7b35-44ad-9b57-4f25c7ec6320',
  },
  {
    film: 'NATIONAL_TREASURE',
    text: "A toast? Yeah. To high treason. That's what these men were committing when they signed the Declaration.",
    created_at: '2020-10-13T23:05:44.949608+00:00',
    updated_at: '2020-10-13T23:05:44.949608+00:00',
    id: '51308903-37de-4c1d-8952-c273fbf3f8cb',
  },
  {
    film: 'WINDTALKERS',
    text: 'I killed him. I took a grenade, threw it in there and blew him up.',
    created_at: '2020-10-13T22:51:19.758784+00:00',
    updated_at: '2020-10-13T23:06:08.086651+00:00',
    id: '46f8fe3a-ba6d-4843-b4fb-ed9845ea547e',
  },
  {
    film: 'CON_AIR',
    text: 'Many hands make light work. My daddy taught me that.',
    created_at: '2020-10-13T23:08:29.35612+00:00',
    updated_at: '2020-10-13T23:08:29.35612+00:00',
    id: '90aa2bf2-e1bc-4d35-bf2c-07ab86f3b08f',
  },
  {
    film: 'LORD_OF_WAR',
    text: "You can't force someone to fall in love with you, but you can definitely improve your odds.",
    created_at: '2020-10-13T23:08:52.066122+00:00',
    updated_at: '2020-10-13T23:08:52.066122+00:00',
    id: '984ed324-ebd6-477e-a42b-facfd2e56712',
  },
  {
    film: 'THE_ROCK',
    text: "I'm one of those fortunate people who like my job, sir. Got my first chemistry set when I was seven, blew my eyebrows off, we never saw the cat again, been into it ever since.",
    created_at: '2020-10-13T23:09:32.829545+00:00',
    updated_at: '2020-10-13T23:09:32.829545+00:00',
    id: '1d9aa97b-d473-489c-8226-593138e5bcb3',
  },
  {
    film: 'LORD_OF_WAR',
    text: "Where there's a will, there's a weapon.",
    created_at: '2020-10-13T23:10:11.389585+00:00',
    updated_at: '2020-10-13T23:10:11.389585+00:00',
    id: 'aa458619-a55a-4520-9249-451209d0d3a4',
  },
  {
    film: 'THE_WEATHER_MAN',
    text: "People don't throw things at me any more. Maybe because I carry a bow around.",
    created_at: '2020-10-13T23:10:39.628973+00:00',
    updated_at: '2020-10-13T23:10:39.628973+00:00',
    id: 'e7aa6411-e660-4df7-a564-568c0cc04186',
  },
  {
    film: 'LORD_OF_WAR',
    text: 'There are two types of tragedies in life. One is not getting what you want, the other is getting it.',
    created_at: '2020-10-13T23:12:02.216431+00:00',
    updated_at: '2020-10-13T23:12:02.216431+00:00',
    id: '1e4a7fc1-ce80-40b9-bdef-4c72e22c8c30',
  },
  {
    film: 'THE_ROCK',
    text: "You're insane, Mason. The kid'll have nightmares. I'll spend all my money on shrinks.",
    created_at: '2020-10-13T23:12:37.439414+00:00',
    updated_at: '2020-10-13T23:12:37.439414+00:00',
    id: '4ff49c5f-118f-406a-a72e-12e31cd58845',
  },
  {
    film: 'LORD_OF_WAR',
    text: 'Thank God there are still legal ways to exploit developing countries.',
    created_at: '2020-10-13T23:13:52.514813+00:00',
    updated_at: '2020-10-13T23:13:52.514813+00:00',
    id: 'a6b8443f-89f8-4a5e-8d0f-8b1f7f4ed90f',
  },
  {
    film: 'THE_ROCK',
    text: 'I love pressure. I eat it for breakfast.',
    created_at: '2020-10-13T23:15:01.313836+00:00',
    updated_at: '2020-10-13T23:15:01.313836+00:00',
    id: '04ac0a9e-2e61-4632-83a1-701984b5084d',
  },
  {
    film: 'THE_ROCK',
    text: "I drive a Volvo, a beige one. But what I'm dealing with here is one of the most deadly substances the Earth has ever known, so what say you cut me some friggin' slack?",
    created_at: '2020-10-13T23:15:29.435305+00:00',
    updated_at: '2020-10-13T23:15:29.435305+00:00',
    id: 'b280a4a3-c63b-4f93-9ed9-5e7b7f1efd57',
  },
  {
    film: 'GONE_IN_60_SECONDS',
    text: "But remember: The car is you, you are the car. Okay? Let's ride!",
    created_at: '2020-10-13T23:16:50.89055+00:00',
    updated_at: '2020-10-13T23:16:50.89055+00:00',
    id: 'a27908a5-c1c5-4970-b5cb-97b30c614b76',
  },
  {
    film: 'LORD_OF_WAR',
    text: 'The first and most important rule of gun-running is to never get shot with your own merchandise.',
    created_at: '2020-10-13T23:17:02.810851+00:00',
    updated_at: '2020-10-13T23:17:02.810851+00:00',
    id: '50267f69-2503-4295-b841-4b290bbcdf6f',
  },
  {
    film: 'CON_AIR',
    text: "It's my daughter's birthday today. So please feel free not to share everything with me.",
    created_at: '2020-10-13T23:17:22.44694+00:00',
    updated_at: '2020-10-13T23:17:22.44694+00:00',
    id: '508047cd-3d56-4453-a7db-c418cc8bed76',
  },
  {
    film: 'THE_ROCK',
    text: "Well, there's a problem sir, he's got a gun!",
    created_at: '2020-10-13T23:17:43.78128+00:00',
    updated_at: '2020-10-13T23:17:43.78128+00:00',
    id: '521e721b-02c9-4a54-be2f-2f8bad9f0192',
  },
  {
    film: 'LORD_OF_WAR',
    text: 'The only question is: "How do we arm the other 11?"',
    created_at: '2020-10-13T23:18:14.236182+00:00',
    updated_at: '2020-10-13T23:18:14.236182+00:00',
    id: '53b91b83-9376-4774-8a7e-98a27ef476c9',
  },
  {
    film: 'THE_ROCK',
    text: "Unless you're a 20 year old guitarist from Seattle. It's a grunge thing.",
    created_at: '2020-10-13T23:18:52.719574+00:00',
    updated_at: '2020-10-13T23:18:52.719574+00:00',
    id: '40f7cba7-b17f-4355-8374-34966dd5360a',
  },
  {
    film: 'THE_ROCK',
    text: 'May I also suggest a haircut?',
    created_at: '2020-10-13T23:19:00.120549+00:00',
    updated_at: '2020-10-13T23:19:00.120549+00:00',
    id: '77ad9698-8605-4e6b-9a4b-e0ebc1c492af',
  },
  {
    film: 'CON_AIR',
    text: "Sorry boss, but there's only two men I trust. One of them's me. The other's not you.",
    created_at: '2020-10-13T23:20:20.045744+00:00',
    updated_at: '2020-10-13T23:20:20.045744+00:00',
    id: 'd365db7c-b445-4f85-924b-15c98db2a594',
  },
  {
    film: 'CON_AIR',
    text: "You don't treat women like that.",
    created_at: '2020-10-13T23:20:54.929649+00:00',
    updated_at: '2020-10-13T23:20:54.929649+00:00',
    id: '34649b7f-a4f0-41dc-8241-86f87b1e89ec',
  },
  {
    film: 'CON_AIR',
    text: 'Put the bunny, back in the box...',
    created_at: '2020-10-13T23:21:12.840916+00:00',
    updated_at: '2020-10-13T23:21:12.840916+00:00',
    id: '5b88f092-b195-43b9-955d-81deefdd0b3f',
  },
  {
    film: 'CON_AIR',
    text: "Why couldn't you put the bunny back in the box?",
    created_at: '2020-10-13T23:21:31.690252+00:00',
    updated_at: '2020-10-13T23:21:31.690252+00:00',
    id: 'b051c01a-8fde-48dc-be46-5d035212682c',
  },
  {
    film: 'CON_AIR',
    text: 'On any other day, that might seem strange.',
    created_at: '2020-10-13T23:21:38.584558+00:00',
    updated_at: '2020-10-13T23:21:38.584558+00:00',
    id: 'e9bc98bf-6c0c-492e-97aa-5d5947efe96a',
  },
  {
    film: 'CON_AIR',
    text: 'They somehow managed to get every creep and freak in the universe onto this one plane.',
    created_at: '2020-10-13T23:21:55.705075+00:00',
    updated_at: '2020-10-13T23:21:55.705075+00:00',
    id: 'ea2f215e-7e3c-4688-83bc-e0340d3fea1b',
  },
  {
    film: 'FACE_OFF',
    text: "Lars? It's me. Believe it! Someone took my... some f***ing... but it's cool. We're gonna deal with it. Oh yes, we're gonna deal with it...",
    created_at: '2020-10-13T23:13:21.016432+00:00',
    updated_at: '2020-10-13T23:22:21.9977+00:00',
    id: '81501edf-018d-49a8-9443-a9f46a5b9dc7',
  },
  {
    film: 'RAISING_ARIZONA',
    text: "I think the wife and me are splitting up. Her point is that we're both kind of selfish and unrealistic, so we're not really good for each other.",
    created_at: '2020-10-13T23:03:53.88526+00:00',
    updated_at: '2020-10-14T20:13:35.290992+00:00',
    id: 'c67001ae-4bba-43ea-9e44-033480034577',
  },
  {
    film: 'FACE_OFF',
    text: 'You know I can uh... eat a peach for hours...',
    created_at: '2020-10-13T23:11:39.464048+00:00',
    updated_at: '2020-10-14T21:34:47.220996+00:00',
    id: '910380d8-ca41-4259-b8ec-322826a3ade7',
  },
  {
    film: 'CON_AIR',
    text: 'Now, what would my daughter think of me if I left you to be dishonored and die?',
    created_at: '2020-10-14T21:47:27.237709+00:00',
    updated_at: '2020-10-14T21:47:27.237709+00:00',
    id: 'faeff006-9ebc-47ea-a5cf-9a6c2905ca02',
  },
  {
    film: 'CON_AIR',
    text: "Well, Baby O, it's not exactly mai-tais and Yahtzee out here — but let's do it.",
    created_at: '2020-10-14T21:48:24.040702+00:00',
    updated_at: '2020-10-14T21:48:24.040702+00:00',
    id: 'de605baf-8ae8-4598-830d-1b95e997e102',
  },
  {
    film: 'CON_AIR',
    text: "Just so's you know, Marshal Larkin, there's now three men I trust.",
    created_at: '2020-10-14T21:48:34.230754+00:00',
    updated_at: '2020-10-14T21:48:34.230754+00:00',
    id: '8b8920e6-28f0-41bc-a67e-02d1193d5c9c',
  },
  {
    film: 'CITY_OF_ANGELS',
    text: 'What if I just make her a little pair of wings out of paper?',
    created_at: '2020-10-14T21:50:21.846151+00:00',
    updated_at: '2020-10-14T21:50:21.846151+00:00',
    id: '1de322f8-d975-49e6-9b03-c44cd23d939f',
  },
  {
    film: 'GONE_IN_60_SECONDS',
    text: "I just stole fifty cars in one night! I'm a little tired, little *wired*, and I think I deserve a little appreciation!",
    created_at: '2020-10-14T21:51:55.388894+00:00',
    updated_at: '2020-10-14T21:51:55.388894+00:00',
    id: 'ab19111b-39eb-43c9-9109-c5a1cb0a2ee7',
  },
  {
    film: 'GONE_IN_60_SECONDS',
    text: 'The ladies are dirty. Walk away. The ladies are dirty.',
    created_at: '2020-10-14T21:52:33.0936+00:00',
    updated_at: '2020-10-14T21:52:33.0936+00:00',
    id: 'a6b187d3-7144-4671-8818-93265e3b2ec2',
  },
  {
    film: 'GONE_IN_60_SECONDS',
    text: "That's funny, my name's Roger... Two Rogers don't make a right.",
    created_at: '2020-10-14T21:52:48.151403+00:00',
    updated_at: '2020-10-14T21:52:48.151403+00:00',
    id: '977902dc-d4fd-4a4c-bada-758be792c587',
  },
  {
    film: 'CON_AIR',
    text: 'Ugly all day.',
    created_at: '2020-10-13T23:16:07.726269+00:00',
    updated_at: '2020-10-14T22:06:14.485219+00:00',
    id: '1b3d73a1-574e-4e18-af28-3eb003b6d5cd',
  },
  {
    film: 'CON_AIR',
    text: "If you see my wife again, you tell her I love her... she's my hummingbird.",
    created_at: '2020-10-14T22:22:24.160346+00:00',
    updated_at: '2020-10-14T22:22:24.160346+00:00',
    id: '0459b007-3148-4f1c-847a-c6aadf03d6c6',
  },
  {
    film: 'FACE_OFF',
    text: "I'm ready, ready for the big ride, baby!",
    created_at: '2020-10-14T23:02:42.108091+00:00',
    updated_at: '2020-10-14T23:02:42.108091+00:00',
    id: '7e28373a-d125-46ab-81c5-9a0ec486f444',
  },
  {
    film: 'FACE_OFF',
    text: "Eve, listen to me. The man you think is your husband isn't.",
    created_at: '2020-10-14T23:05:17.653408+00:00',
    updated_at: '2020-10-14T23:05:17.653408+00:00',
    id: '29c40d3e-1206-435f-8b62-0d1c5d29e019',
  },
  {
    film: 'FACE_OFF',
    text: "When I get out of here... I'm gonna have you fired.",
    created_at: '2020-10-14T23:06:42.668268+00:00',
    updated_at: '2020-10-14T23:06:42.668268+00:00',
    id: '25513774-683f-4c63-b284-2a62d1d66aa2',
  },
  {
    film: 'CON_AIR',
    text: 'My first thought would be... a lot.',
    created_at: '2020-10-15T04:50:42.21442+00:00',
    updated_at: '2020-10-15T04:50:42.21442+00:00',
    id: '6623076f-3185-4942-83c7-d45ae206914a',
  },
  {
    film: 'THE_ROCK',
    text: 'Yea. Goodspeed, to wish someone a prosperous journey. Why?',
    created_at: '2020-10-13T23:19:41.2767+00:00',
    updated_at: '2020-11-05T02:46:13.139976+00:00',
    id: '6ebbbfab-d208-40bd-9736-5e222f213a2c',
  },
]

export const useCagesum = async ({
  numberOfParagraphs,
  quotesPerParagraph,
}: {
  numberOfParagraphs: number
  quotesPerParagraph: number
}) => {
  const numberOfQuotes = Math.min(
    numberOfParagraphs * quotesPerParagraph,
    data.length,
  )

  // Shuffle data and slice to get only the required number of quotes
  const selectedQuotes = shuffle(data).slice(0, numberOfQuotes)

  let paragraphs = ''
  selectedQuotes.forEach((q, index) => {
    // Append each quote to the paragraphs string
    paragraphs += `${q.text} `

    // Add a newline at the end of each paragraph, based on quotesPerParagraph
    if (
      (index + 1) % quotesPerParagraph === 0 ||
      index === numberOfQuotes - 1
    ) {
      paragraphs += '\n\n'
    }
  })

  return paragraphs.trim() // Trim to remove any extra whitespace at the end
}
