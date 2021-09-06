import { aroundNumber } from "./AroundNumber"

export function CalcWinrate(wins: number, losses: number) {
  const total = wins + losses
  const winrate = (wins * 100) / total

  return aroundNumber(winrate, 1)
}
