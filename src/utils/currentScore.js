const currentScore = (totalQuestions, totalQuestionsAnswered, numberOfCorrectAnswers) => {
  if (totalQuestionsAnswered === 0) return 0
  const percentageOfCorrectAnswers = (numberOfCorrectAnswers / totalQuestionsAnswered) * 100
  return Math.ceil(percentageOfCorrectAnswers)
}

module.exports = {
  currentScore
}
