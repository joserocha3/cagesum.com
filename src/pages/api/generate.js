import shuffle from 'lodash/shuffle'

const DATABASE = [
  {
    text: 'My first thought would be... a lot.',
    film: 'CON_AIR',
  },
  {
    text: "When I get out of here... I'm gonna have you fired.",
    film: 'FACE_OFF',
  },
  {
    text: "Eve, listen to me. The man you think is your husband isn't.",
    film: 'FACE_OFF',
  },
  {
    text: "I'm ready, ready for the big ride, baby!",
    film: 'FACE_OFF',
  },
  {
    text: "If you see my wife again, you tell her I love her... she's my hummingbird.",
    film: 'CON_AIR',
  },
  {
    text: "That's funny, my name's Roger... Two Rogers don't make a right.",
    film: 'GONE_IN_60_SECONDS',
  },
  {
    text: 'The ladies are dirty. Walk away. The ladies are dirty.',
    film: 'GONE_IN_60_SECONDS',
  },
  {
    text: "I just stole fifty cars in one night! I'm a little tired, little *wired*, and I think I deserve a little appreciation!",
    film: 'GONE_IN_60_SECONDS',
  },
  {
    text: 'What if I just make her a little pair of wings out of paper?',
    film: 'CITY_OF_ANGELS',
  },
  {
    text: 'He is living. Just not the way you think.',
    film: 'CITY_OF_ANGELS',
  },
  {
    text: "Just so's you know, Marshal Larkin, there's now three men I trust.",
    film: 'CON_AIR',
  },
  {
    text: "Well, Baby O, it's not exactly mai-tais and Yahtzee out here — but let's do it.",
    film: 'CON_AIR',
  },
  {
    text: 'Now, what would my daughter think of me if I left you to be dishonored and die?',
    film: 'CON_AIR',
  },
  {
    text: 'They somehow managed to get every creep and freak in the universe onto this one plane.',
    film: 'CON_AIR',
  },
  {
    text: 'On any other day, that might seem strange.',
    film: 'CON_AIR',
  },
  {
    text: "Why couldn't you put the bunny back in the box?",
    film: 'CON_AIR',
  },
  {
    text: 'Put the bunny, back in the box...',
    film: 'CON_AIR',
  },
  {
    text: "You don't treat women like that.",
    film: 'CON_AIR',
  },
  {
    text: "Sorry boss, but there's only two men I trust. One of them's me. The other's not you.",
    film: 'CON_AIR',
  },
  {
    text: 'Yea. Goodspeed, to wish someone a prosperous journey. Why?',
    film: 'THE_ROCK',
  },
  {
    text: 'May I also suggest a haircut?',
    film: 'THE_ROCK',
  },
  {
    text: "Unless you're a 20 year old guitarist from Seattle. It's a grunge thing.",
    film: 'THE_ROCK',
  },
  {
    text: 'The only question is: "How do we arm the other 11?"',
    film: 'LORD_OF_WAR',
  },
  {
    text: "Well, there's a problem sir, he's got a gun!",
    film: 'THE_ROCK',
  },
  {
    text: "It's my daughter's birthday today. So please feel free not to share everything with me.",
    film: 'CON_AIR',
  },
  {
    text: 'The first and most important rule of gun-running is to never get shot with your own merchandise.',
    film: 'LORD_OF_WAR',
  },
  {
    text: "But remember: The car is you, you are the car. Okay? Let's ride!",
    film: 'GONE_IN_60_SECONDS',
  },
  {
    text: 'Ugly all day.',
    film: 'CON_AIR',
  },
  {
    text: "I drive a Volvo, a beige one. But what I'm dealing with here is one of the most deadly substances the Earth has ever known, so what say you cut me some friggin' slack?",
    film: 'THE_ROCK',
  },
  {
    text: 'I love pressure. I eat it for breakfast.',
    film: 'THE_ROCK',
  },
  {
    text: 'Thank God there are still legal ways to exploit developing countries.',
    film: 'LORD_OF_WAR',
  },
  {
    text: "Lars? It's me. Believe it! Someone took my... some f***ing... but it's cool. We're gonna deal with it. Oh yes, we're gonna deal with it...",
    film: 'FACE_OFF',
  },
  {
    text: "You're insane, Mason. The kid'll have nightmares. I'll spend all my money on shrinks.",
    film: 'THE_ROCK',
  },
  {
    text: 'There are two types of tragedies in life. One is not getting what you want, the other is getting it.',
    film: 'LORD_OF_WAR',
  },
  {
    text: 'You know I can uh... eat a peach for hours...',
    film: 'FACE_OFF',
  },
  {
    text: "People don't throw things at me any more. Maybe because I carry a bow around.",
    film: 'THE_WEATHER_MAN',
  },
  {
    text: "Where there's a will, there's a weapon.",
    film: 'LORD_OF_WAR',
  },
  {
    text: "I'm one of those fortunate people who like my job, sir. Got my first chemistry set when I was seven, blew my eyebrows off, we never saw the cat again, been into it ever since.",
    film: 'THE_ROCK',
  },
  {
    text: "You can't force someone to fall in love with you, but you can definitely improve your odds.",
    film: 'LORD_OF_WAR',
  },
  {
    text: 'Many hands make light work. My daddy taught me that.',
    film: 'CON_AIR',
  },
  {
    text: "A toast? Yeah. To high treason. That's what these men were committing when they signed the Declaration.",
    film: 'NATIONAL_TREASURE',
  },
  {
    text: "What's that like? What's it taste like? Describe it like Hemingway.",
    film: 'CITY_OF_ANGELS',
  },
  {
    text: "I believe it's warlord.",
    film: 'LORD_OF_WAR',
  },
  {
    text: "I think the wife and me are splitting up. Her point is that we're both kind of selfish and unrealistic, so we're not really good for each other.",
    film: 'RAISING_ARIZONA',
  },
  {
    text: "I don't predict it. Nobody does, 'cause i-it's just wind. It's wind. It blows all over the place!",
    film: 'THE_WEATHER_MAN',
  },
  {
    text: 'I killed him. I took a grenade, threw it in there and blew him up.',
    film: 'WINDTALKERS',
  },
]

const QUOTES_IN_DB = DATABASE.length

const generate = async (req, res) => {
  const numberOfParagraphs = req?.body?.input?.numberOfParagraphs || 1
  const quotesPerParagraph = req?.body?.input?.quotesPerParagraph || 3

  const numberOfQuotes = Math.min(
    numberOfParagraphs * quotesPerParagraph,
    QUOTES_IN_DB
  )

  const data = shuffle(DATABASE).slice(0, numberOfQuotes)

  let paragraphs = ''

  data.forEach((q, index) => {
    paragraphs = paragraphs +=
      (index + 1) % quotesPerParagraph === 0 ? `${q.text}\n\n` : `${q.text} `
  })

  return res.json({ paragraphs })
}

export default generate
