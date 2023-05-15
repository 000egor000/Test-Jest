const { arrayDb } = require('../task/task')
const { mokeDataArrayDb } = require('../constDataOfTest')

describe('Проверка функции, котрая должна в зависимости от индекса(n), возвращать строку с бол буквы и кол элементов n', () => {
  beforeEach(() => {
    mokeDataArrayDb
  })

  it('С применением beforeEach', () =>
    mokeDataArrayDb.forEach(({ fisrt, res }) =>
      expect(arrayDb(fisrt)).toEqual(res)
    ))
})
