const { maxScorePossible } = require('../../maxScorePossible')

describe('findMaxScore', () => {
  it('calculates the maximum score correctly', () => {
    expect(maxScorePossible(20, 15, 10)).toBeCloseTo(75.00, 2)
    expect(maxScorePossible(20, 10, 5)).toBeCloseTo(75.00, 2)
    expect(maxScorePossible(30, 15, 10)).toBeCloseTo(84, 2)
  })

  it('returns 100 if all questions are answered correctly', () => {
    expect(maxScorePossible(20, 20, 20)).toBe(100)
  })

  it('calculates correctly if no remaining questions are there to answer', () => {
    expect(maxScorePossible(20, 20, 15)).toBeCloseTo(75.00, 2)
  })
})
