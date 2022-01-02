export function FormatSecondsToMinutes(value: number) {
  // const duration = intervalToDuration({ start: 0, end: seconds * 1000 })
  // // { hours: 2, minutes: 46, seconds: 40 }
  // const formatted = `${duration.minutes} minutos e ${duration.seconds} segundos`

  // return formatted

  const minutes = Math.floor(value / 60)
  const seconds = value % 60

  return seconds > 9 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`
}
