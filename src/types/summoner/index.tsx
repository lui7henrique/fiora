export type ISummonerProps = {
  summoner: {
    id: number
    nick: string
    level: number
    icon: string
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
  principalPlayer: PrincipalPlayer
  kda: string
  build: number[]
  team1: {
    championId: number
    championIcon: string
    participantId: number
    nick: string
  }[]
  team2: {
    championId: number
    championIcon: string
    participantId: number
    nick: string
  }[]
}

export type PrincipalPlayer = {
  participantId: number
  teamId: number
  championId: number
  spell1Id: number
  spell2Id: number
  stats: {
    win: boolean
    kills: number
    deaths: number
    assists: number
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
  }
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

// type Timeline = {
//   creepsPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
//   csDiffPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
//   damageTakenDiffPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
//   damageTakenPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
//   goldPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
//   lane: string
//   participantId: number
//   role: string
//   xpDiffPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
//   xpPerMinDeltas: {
//     "10-20": number
//     " 0-10": number
//     "30-end": number
//     "20-30": number
//   }
// }

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
  queue: string
  tier: string
  rank: number
  wins: number
  losses: number
  hotStreak: true
  winrate: number
  lps: number
}

export type Team = {
  bans: {
    championId: number
    pickTurn: number
  }[]
  baronKills: number
  dominionVictoryScore: number
  dragonKills: number
  firstBaron: boolean
  firstBlood: boolean
  firstDragon: boolean
  firstInhibitor: boolean
  firstRiftHerald: boolean
  firstTower: boolean
  inhibitorKills: number
  riftHeraldKills: number
  teamId: number
  towerKills: number
  vilemawKills: number
  win: string
}
