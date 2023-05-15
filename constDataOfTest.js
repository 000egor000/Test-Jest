const mokeDataArrayDb = [
  { fisrt: 'ab', res: 'A-Bb' },
  { fisrt: 'abcd', res: 'A-Bb-Ccc-Dddd' },
  { fisrt: 'abcde', res: 'A-Bb-Ccc-Dddd-Eeeee' },
]
const mokeGetGrade = [
  { fisrt: [95, 90, 93], res: 'A' },
  { fisrt: [70, 70, 100], res: 'B' },
  { fisrt: [70, 70, 70], res: 'C' },
  { fisrt: [65, 70, 59], res: 'D' },
  { fisrt: [44, 55, 52], res: 'F' },
]

const mokeZeroFuel = [
  { fisrt: [12], res: 3 },
  { fisrt: [-34], res: 7 },
  { fisrt: [98], res: 17 },
  { fisrt: [-22], res: 4 },
  { fisrt: [0], res: 0 },
]

module.exports = { mokeDataArrayDb, mokeGetGrade, mokeZeroFuel }
