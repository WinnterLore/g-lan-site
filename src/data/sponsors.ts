export interface Sponsor {
  name: string
  description: string
  url: string
  /** Set once the real logo file has been added under src/assets/sponsors */
  logo: string | null
}

export const sponsors: Sponsor[] = [
  {
    name: 'Emmaüs Fribourg',
    description: 'Pour une solidarité durable.',
    url: 'https://emmaus-fribourg.ch',
    logo: null,
  },
]
