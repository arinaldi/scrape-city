const artists = [
  '311',
  'A Perfect Murder',
  'AC/DC',
  'Ace of Hearts',
  'Aerosmith',
  'AFI',
  'Air',
  'Alice in Chains',
  'All Pigs Must Die',
  'Anathema',
  'Ambulette',
  'Andrew W.K.',
  'Angels & Airwaves',
  'Anthrax',
  'ArmsBendBack',
  'Arthur',
  'Atreyu',
  'Avail',
  'Avenged Sevenfold',
  'Bad Religion',
  'Bars',
  'Bat for Lashes',
  'Beanie Sigel',
  'Baumer',
  'Beastie Boys',
  'Big Jesus',
  'Blackened',
  'Black Ribbons',
  'Bleeding Through',
  'Blink-182',
  'Blink 182',
  'Bloodhound Gang',
  'The Bloodhound Gang',
  'Brandon Saller',
  'Bullets and Octane',
  'Burn Halo',
  'Bury Your Dead',
  'Bush',
  'Canibus',
  'Calliope Musicals',
  'Chuck Ragan',
  'CIG',
  'Cinema Bizarre',
  'City and Colour',
  'CIV',
  'CKY',
  'Collective Soul',
  'Crashdiet',
  'Convent',
  'Creed',
  'Crosses',
  'Codeseven',
  'Curl Up and Die',
  'Cypress Hill',
  'Czarface',
  'Damone',
  'D12',
  'Daniel Lioneye',
  'David Bowie',
  'Daniel Davies',
  'Deftones',
  'Denali',
  'Depeche Mode',
  'Dethklok',
  'Die Trying',
  'Diecast',
  'Deron Miller',
  'Dimmu Borgir',
  'DJ Clue?',
  'DJ Clue',
  'Dinosaur Jr',
  'Dinosaur Jr.',
  'DJ Shadow',
  'DMX',
  'Doves',
  'Earth Crisis',
  'Dr. Dre',
  'Eddie Vedder',
  'Eighteen Visions',
  'EPMD',
  'Eminem',
  'Everclear',
  'Far',
  'Fever Ray',
  'Foo Fighters',
  'Every Time I Die',
  'Foxy Shazam',
  'Frou Frou',
  'Funeral for a Friend',
  'Ghostface Killah',
  'Funkmaster Flex',
  'Gin Blossoms',
  'Garbage',
  'Gnarkill',
  'Glasvegas',
  'Gods',
  'Goldfinger',
  'Goldfrapp',
  'Green Day',
  'Gyroscope',
  'GZA',
  'Greg Graffin',
  'Hardcore Superstar',
  'Guns N Roses',
  'Guns N\' Roses',
  'Hell or Highwater',
  'Helltrain',
  'Head Automatica',
  'Hideki',
  'HIM',
  'HER',
  'Himsa',
  'Hole',
  'Humongous',
  'I Am Ghost',
  'I Am War',
  'Ignite',
  'In Flames',
  'Incubus',
  'Interpol',
  'Icon and the Black Roses',
  'It Dies Today',
  'Jem',
  'Jermaine Dupri',
  'Jerry Cantrell',
  'Jim Adkins',
  'Jeremy Enigk',
  'Jimmy Eat World',
  'Joel Kosche',
  'Josh Haden',
  'Jurassic 5',
  'Ké',
  'Killer Mike',
  'Kleerup',
  'Korn',
  'La Roux',
  'Lana Del Rey',
  'Limp Bizkit',
  'Linkin Park',
  'Lenny Kravitz',
  'Local H',
  'Led Zeppelin',
  'Lola Ray',
  'Lostprophets',
  'M83',
  'Lykke Li',
  'Maniac',
  'Maria Andersson',
  'Loud Lucy',
  'Mariachi El Bronx',
  'Marilyn Manson',
  'Melody Club',
  'Metallica',
  'Michael Jackson',
  'Method Man',
  'Mike Herrera',
  'Morningwood',
  'Michale Graves',
  'Muse',
  'Modern Crimes',
  'MxPx',
  'My Chemical Romance',
  'My Bloody Valentine',
  'Nails',
  'Neverending White Lights',
  'New Order',
  'Newsted',
  'Nine Inch Nails',
  'Nirvana',
  'No Doubt',
  'Noel Gallagher',
  'NOFX',
  'Noisem',
  'Nonpoint',
  'Oasis',
  'Nora',
  'Open Hand',
  'Ol Dirty Bastard',
  'Outkast',
  'Pantera',
  'Papa Roach',
  'Patrick Park',
  'Pearl Jam',
  'Pennywise',
  'Pet Shop Boys',
  'Pete Rock',
  'Phil Collins',
  'Placebo',
  'Poison the Well',
  'Priestess',
  'Puscifer',
  'Program the Dead',
  'Probot',
  'R.E.M.',
  'Radiohead',
  'Queen',
  'Rage Against the Machine',
  'Puff Daddy',
  'Ramones',
  'Ratking',
  'Redman',
  'Recon',
  'Reel Big Fish',
  'Rancid',
  'Robert Miles',
  'Robyn',
  'Refused',
  'Röyksopp',
  'Royksopp',
  'Roni Size',
  'Sahara Hotnights',
  'RZA',
  'Scarlet',
  'Scissor Sisters',
  'S.O.S.',
  'Scott Lucas and the Married Men',
  'Sheryl Crow',
  'Sigur Rós',
  'Sigur Ros',
  'Silverchair',
  'Smashing Pumpkins',
  'Snoop Dogg',
  'Soundgarden',
  'Spain',
  'Steel Panther',
  'Sticky Fingaz',
  'Stone Temple Pilots',
  'Sublime',
  'Surferosa',
  'Suffer Well',
  'System of a Down',
  'Tash',
  'Taylor Hawkins',
  'Terror',
  'Taylor Hawkins and the Coattail Riders',
  'Tha Alkaholiks',
  'Tha Liks',
  'The 69 Eyes',
  'The Album Leaf',
  'The Bled',
  'The Break',
  'The Bronx',
  'The Classic Crime',
  'The Cootees',
  'The Cure',
  'The Damned Things',
  'The Darkness',
  'The Distance',
  'The Distillers',
  'The Drips',
  'The Hope Conspiracy',
  'The Killers',
  'The Iron Son',
  'The Kinison',
  'The Matches',
  'The Misfits',
  'The Moody Blues',
  'The Offspring',
  'The Prodigy',
  'The Postal Service',
  'The Rasmus',
  'The Presidents of the United States of America',
  'The Sounds',
  'The Velvet Teen',
  'The Veronicas',
  'The Vows',
  'Thomas Giles',
  'Throwdown',
  'Tim Barry',
  'To Die For',
  'Toadies',
  'Tool',
  'Tumbledown',
  'Turbonegro',
  'Unearth',
  'Unkle',
  'Unkle Matt and the Shitbirdz',
  'Vaux',
  'Vocal Few',
  'Volbeat',
  'Weeping Willows',
  'Weezer',
  'White Sea',
  'Will Turpin',
  'World Under Blood',
  'Wu-Tang Clan',
  'Xzibit',
  'You+Me',
  'The Preatures',
  'Big Boi',
  'Lorde',
  'Ed Roland',
  'Blackeye',
  'Alanis Morissette',
  'Bedlight for Blue Eyes',
  'Black Sabbath',
  'Cancer Bats',
  'Dance Floor Justice',
  'Darkest Hour',
  'Death From Above 1979',
  'Doctor Midnight and the Mercy Cult',
  'Fatboy Slim',
  'Fuckface Unstoppable',
  'Foreign Objects',
  'Hootie and the Blowfish',
  'How to Destroy Angels',
  'Imogen Heap',
  'Juliette and the Licks',
  'Lacrimas Profundere',
  'Juliana Hatfield',
  'Megadeth',
  'Most Precious Blood',
  'Polkadot Cadaver',
  'Queens of the Stone Age',
  'Red Hot Chili Peppers',
  'Rudy + Blitz',
  'The Dillinger Escape Plan',
  'The Ting Tings',
  'Tom Petty',
  'Tom DeLonge',
  'Walls of Jericho',
  'Zimmers Hole',
  'Rob Zombie',
  'Ace of Base',
  'Alice Deejay',
  'American Lesion',
  'Austrian Death Machine',
  'Bed of Stars',
  'Bob Marley',
  'Camp Lo',
  'Carolina Liar',
  'Chris Isaak',
  'Day of Contempt',
  'Deathkiller',
  'Hank Von Hell',
  'The Sweet Tea Project',
  'Escondido',
  'Evergreen Terrace',
  'Genesis',
  'Green Jellö',
  'Green Jello',
  'Gone Without Trace',
  'I Am the Thorn',
  'Ice Cube',
  'Inspectah Deck',
  'Intramural',
  'Jay-Z',
  'Jay Z',
  'Jimi Hendrix',
  'Kris Kross',
  'Madonna',
  'MC Paul Barman',
  'N.W.A.',
  'One Day as a Lion',
  'Ozzy Osbourne',
  'Pharoahe Monch',
  'Prince',
  'Prophets of Rage',
  'Raekwon',
  'Roadrunner United',
  'Richard Ashcroft',
  'Reprazent',
  'Run the Jewels',
  'Scars on Broadway',
  'Self',
  'Soul Asylum',
  'Sunz of Man',
  'Sway & King Tech',
  'The Devin Townsend Project',
  'The Evesdroppers',
  'The Hellacopters',
  'The Mistake',
  'The Notorious B.I.G.',
  'The Streets',
  'The Submarines',
  'The Vandals',
  'Turnstile',
  'White Zombie',
  'Within Temptation',
  'The Federal Empire',
  'Destroy the Machine',
  '96 Bitter Beings',
  'Sugar Ray',
  'Blondie',
  'Ville Valo & Agents',
  'J Dilla',
  'Cokie the Clown',
  'Helmet',
  'Gojira',
  'Dr. Octagon',
  'VV',
];

export default artists;

