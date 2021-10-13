export function formatSpellByIndex(index: number) {
  switch (index) {
    case 0:
      return "Q"
    case 1:
      return "W"
    case 2:
      return "E"
    case 3:
      return "R"
    default:
      return "Undefined"
  }
}
