import Image from "next/image"
import { ISummonerProps } from "pages/summoner/[nick]"

export function SummonerTemplate({ summoner }: ISummonerProps) {
  return (
    <>
      <h1>{summoner.nick}</h1>
      <h2>id: {summoner.id}</h2>
      <h2>puuid: {summoner.puuid}</h2>
      <h2>acc id: {summoner.accountId}</h2>

      {summoner.matches.map((match) => {
        return (
          <>
            <p key={match.id}>
              {match.champion_id} | {match.id}
            </p>
            <Image
              src={match.champion_icon}
              alt={match.champion_icon}
              width={48}
              height={48}
            />
          </>
        )
      })}
    </>
  )
}
