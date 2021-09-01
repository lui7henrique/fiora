export type ISummonerProps = {
  summoner: {
    id: number
    accountId: string
    puuid: string
    nick: string
    icon: string
    level: number
    splash_art: string
    matches: Match[]
    masteries: Mastery[]
  }
}

export type Match = {
  id: number
  champion_id: number
  champion_icon: string
  queue: number
  timestamp: number
  duration: number
  lane: string
  teams: any
  participants: any
  participantIdentities: any
}

export type Mastery = {
  category: string[]
  chestGranted: boolean
  icon: string
  key: number
  lastPlayTime: number
  level: number
  name: string
  points: number
  title: string
}
