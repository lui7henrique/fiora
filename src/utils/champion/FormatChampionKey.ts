export function addZeros(num: number, len: number) {
  var numberWithZeros = String(num)
  var counter = numberWithZeros.length

  while (counter < len) {
    numberWithZeros = "0" + numberWithZeros

    counter++
  }

  return numberWithZeros
}
