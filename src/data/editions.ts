export interface Edition {
  year: number
  slug: string
  title: string
  summary: string
  players: number | null
  games: string[]
  mysteryGame: boolean
}

export const editions: Edition[] = [
  {
    year: 2026,
    slug: '2026',
    title: 'Édition 2026',
    summary:
      "La première édition à réunir 32 joueuses et joueurs. Un défi conséquent pour nos organisateurs, relevé sur 10 jeux plus fous les uns que les autres.",
    players: 32,
    games: [
      'Angry Penguin',
      'Circuit Superstars',
      'Golf It',
      'PUBG',
      'Nidhogg',
      'Minecraft Speedrun',
      'Worms W.M.D',
      'Trials Rising',
      'Retimed',
    ],
    mysteryGame: true,
  },
  {
    year: 2025,
    slug: '2025',
    title: 'Édition 2025',
    summary:
      "L'édition qui a posé les bases du G-LAN, entre stratégie, tir et petits jeux qui font mal à l'ego.",
    players: null,
    games: [
      'TFT',
      'TF2',
      'Beton Brutal',
      'GeoGuessr',
      'Speedrunners',
      'Microworks',
      'Tricky Towers',
      'Brawlhalla',
    ],
    mysteryGame: false,
  },
]
