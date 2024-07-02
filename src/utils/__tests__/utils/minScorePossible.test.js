const { minScorePossible } = require('../../minScorePossible')

describe('findMinScore', () => {
  it('calculates the minimum score correctly', () => {
    expect(minScorePossible(20, 10, 10)).toBeCloseTo(50.00, 2)
    expect(minScorePossible(40, 20, 20)).toBeCloseTo(50.00, 2)
    expect(minScorePossible(20, 0, 0)).toBe(0)
  })
})
