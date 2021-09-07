export type Item = {
  description: string
  gold: { base: number; purchasable: boolean; total: number; sell: number }
  image: string
  maps: [{ 11: boolean }, { 12: boolean }]
  name: string
  plaintext: string
  stats: { attribute: number }
  tags: string[]
}

export type Tree = {
  header: string
  tags: string[]
}
