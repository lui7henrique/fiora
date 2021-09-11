export function FormatCategoryHeader(category: string) {
  switch (category) {
    case "START":
      return "Iniciais"
    case "TOOLS":
      return "Ferramentas"
    case "DEFENSE":
      return "Defesa"
    case "ATTACK":
      return "Ataque"
    case "MAGIC":
      return "Magia"
    case "MOVEMENT":
      return "Movimento"
    case "UNCATEGORIZED":
      return "Não categorizado"
    default:
      return "Undefined"
  }
}
