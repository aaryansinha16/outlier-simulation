const minScorePossible = (totalQuestions, totalQuestionsAnswered, numberOfCorrectAnswers) => {
  const minPossibleScorePercentage = (numberOfCorrectAnswers / totalQuestions) * 100 // Assuming rest of the answers would be wrong
  return Math.ceil(minPossibleScorePercentage)
}

module.exports = {
  minScorePossible
}
