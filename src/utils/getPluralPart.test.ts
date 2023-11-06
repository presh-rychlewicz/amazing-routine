import getPluralPart from './getPluralPart'

describe('getPluralPart', () => {
  const testCases: Array<TestCase> = [
    {
      expectedResult: '1 core',
      params: [1, 'core'],
    },
    {
      expectedResult: '2 cores',
      params: [2, 'core'],
    },
  ]

  testCases.map(({ params, expectedResult }) => {
    it('returns correct result', () => {
      const result = getPluralPart(params[0], params[1])

      expect(result).toEqual(expectedResult)
    })
  })
})

type GetPluralPart = typeof getPluralPart
type TestCase = {
  params: Parameters<GetPluralPart>
  expectedResult: ReturnType<GetPluralPart>
}
