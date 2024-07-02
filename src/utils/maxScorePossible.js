const maxScorePossible = (totalQuestions, totalQuestionsAnswered, numberOfCorrectAnswers) => {
  if (totalQuestionsAnswered === 0) return 100
  const remainingQuestions = totalQuestions - totalQuestionsAnswered
  const maxCorrectAnswersPossible = numberOfCorrectAnswers + remainingQuestions
  const maxPercentagePossible = (maxCorrectAnswersPossible / totalQuestions) * 100
  return Math.ceil(maxPercentagePossible)
}

module.exports = {
  maxScorePossible
}
