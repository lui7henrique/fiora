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

export type Match = {
  id: number
  champion_id: number
  champion_icon: string
  queue: number
  timestamp: number
  duration: number
  lane: string
  teams: any
  participants: {
    championId: number
    participantId: number
    spell1Id: number
    spell2Id: number
    stats: Stats
    timeline: Timeline
  }[]
  participantIdentities: {
    participantId: number
    player: ParticipantIdentity
  }[]
}

export type ParticipantIdentity = {
  accountId: string
  currentAccountId: string
  currentPlatformId: string
  matchHistoryUri: string
  platformId: string
  profileIcon: number
  summonerId: string
  summonerName: string
}

type Timeline = {
  creepsPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
  csDiffPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
  damageTakenDiffPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
  damageTakenPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
  goldPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
  lane: string
  participantId: number
  role: string
  xpDiffPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
  xpPerMinDeltas: {
    "10-20": number
    " 0-10": number
    "30-end": number
    "20-30": number
  }
}

export type Stats = {
  assists: number
  champLevel: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  firstBloodKill: number
  goldEarned: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  kills: number
  totalMinionsKilled: number
  tripleKills: number
  wardsPlaced: number
  win: true
}

export type Rank = {
  freshBlood: boolean
  hotStreak: boolean
  inactive: boolean
  leagueId: string
  leaguePoints: number
  losses: number
  queueType: string
  rank: string
  summonerId: string
  summonerName: string
  tier: string
  veteran: boolean
  wins: number
}
