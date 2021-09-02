export function FormatSecondsToMinutes(timestamp: number) {
  const minutes = Math.floor(timestamp / 60)
  const seconds = timestamp % 60

  return seconds > 9 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`
}
