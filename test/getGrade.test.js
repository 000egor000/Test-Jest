const { getGrade } = require('../task/task')
const { mokeGetGrade } = require('../constDataOfTest')
describe('Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.', () => {
  mokeGetGrade.forEach(({ fisrt, res }) => {
    it(`Входящие данные, вход:${fisrt}=> выход:${res}`, () =>
      expect(getGrade(...fisrt)).toEqual(res))
  })
})
