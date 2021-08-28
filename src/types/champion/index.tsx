export type ChampionType = {
  id: string
  key: number
  name: string
  title: string
  lore: string
  allytips: string[]
  enemytips: string[]
  tags: string[]
  info: { attack: number; defense: number; magic: number; difficulty: number }
  stats: {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
  }
  icon: string
  splash_art_full: string
  splash_art_cropped: string
  skins: {
    id: string
    num: number
    name: string
    splash_art_full?: string
    splash_art_cropped?: string
    icon?: string
    loadscreen?: string
    rarity?: string
    cost?: number
  }[]
  spells: {
    id: string
    name: string
    description: string
    image: string
  }[]
  passive: {
    name: string
    description: string
    image: string
  }
}
