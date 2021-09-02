export function TimestampConverter(timestamp: number) {
  var date = new Date(timestamp).toLocaleDateString("pt-BR")
  return date
}
