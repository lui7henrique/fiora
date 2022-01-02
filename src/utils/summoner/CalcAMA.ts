// receive kda as kills/deaths/assists
export const calcAMA = (kda: string): number => {
  const [kills, deaths, assists] = kda.split("/").map((n) => +n)
  const ama = +((kills + assists) / deaths).toFixed(2)

  return ama
}
