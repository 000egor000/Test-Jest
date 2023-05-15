const arrayDb = (val: string): string =>
  val
    .split('')
    .map((e, i) =>
      Array(i + 1)
        .fill(e)
        .join('')
    )
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join('-')

const getGrade = (a: number, b: number, c: number): string | undefined => {
  const Avr = (a: number, b: number, c: number): number => (a + b + c) / 3

  const LetterGrade = (a: number): string | undefined => {
    if (a >= 90 && a <= 100) {
      return 'A'
    } else if (a >= 80 && a <= 90) {
      return 'B'
    } else if (a >= 70 && a <= 80) {
      return 'C'
    } else if (a >= 60 && a <= 70) {
      return 'D'
    } else if (a >= 0 && a <= 60) {
      return 'F'
    }
  }

  return LetterGrade(Avr(a, b, c))
}

const zeroFuel = function (distance: number): number | undefined {
  return Math.abs(distance)
    .toString()
    .split('')
    .reduce(function (e, f) {
      return Number(e) + Number(f)
    }, 0)
}

module.exports = { arrayDb, getGrade, zeroFuel }
