export function FormatTier(tier: string) {
  switch (tier) {
    case "iron":
      return "Ferro"
    case "silver":
      return "Prata"
    case "gold":
      return "Ouro"
    case "platinum":
      return "Platina"
    case "diamond":
      return "Diamante"
    case "master":
      return "Mestre"
    case "grandmaster":
      return "Grão mestre"
    case "challenger":
      return "Desafiante"
    default:
      return "Undefined"
  }
}
