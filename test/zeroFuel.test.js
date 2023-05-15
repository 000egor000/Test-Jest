const { zeroFuel } = require('../task/task')
const { mokeZeroFuel } = require('../constDataOfTest')
describe('Функция сложения цифр, по модулю', () => {
  mokeZeroFuel.forEach(({ fisrt, res }) => {
    it(`Входящие данные, вход:${fisrt}=> выход:${res}`, () =>
      expect(zeroFuel(...fisrt)).toBe(res))
  })
})
