import { DefaultLayout } from "layouts/Default"
import { GetServerSideProps } from "next"
import { americas } from "services/americas"
import { MatchTemplate } from "templates/Match"
import { Match as MatchType } from "types/match"
import { formatMatch } from "utils/match/formatMatch"

type MatchProps = {
  match: ReturnType<typeof formatMatch>
}

export default function Match({ match }: MatchProps) {
  return (
    <DefaultLayout title="Partida" description="partida" hasLimiter>
      <MatchTemplate match={match} />
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id as String

  const { data } = await americas.get(`/match/v5/matches/${id}?`)

  const { info } = data as MatchType

  const match = formatMatch(info)

  return {
    props: {
      match
    }
  }
}
