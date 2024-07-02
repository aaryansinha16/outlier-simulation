const { currentScore } = require('../../currentScore')

describe('findCurrentScore', () => {
  it('calculates the current score correctly', () => {
    expect(currentScore(20, 15, 10)).toBeCloseTo(67, 2)
  })

  it('returns 0 if no questions have been answered', () => {
    expect(currentScore(20, 0, 0)).toBe(0)
  })

  it('returns 100 if all answerd questions are correct', () => {
    expect(currentScore(20, 10, 10)).toBe(100)
  })

  it('returns 0 if no correct answers', () => {
    expect(currentScore(20, 10, 0)).toBe(0)
  })

  it('handles the floating point precision appropriately', () => {
    expect(currentScore(20, 3, 1)).toBeCloseTo(34, 2)
  })
})
