import React from 'react'
import { currentScore } from '../../utils/currentScore'
import { maxScorePossible } from '../../utils/maxScorePossible'
import { minScorePossible } from '../../utils/minScorePossible'

export default function ScoreStats ({
  totalQuestions,
  totalQuestionsAnswered,
  totalCorrectAnswers
}) {
  console.log(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers, minScorePossible(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers), maxScorePossible(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers))
  const currentScoreNumber = currentScore(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers)
  const maxScoreNumber = maxScorePossible(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers)

  return (
    <div className='w-100 m-auto'>
      <div className='w-100 d-flex justify-content-between'>
        <p className='mb-0'>Score: {currentScoreNumber}%</p>
        <p className='mb-0'>Max score: {maxScoreNumber}%</p>
      </div>
      <div
        className='w-100 m-auto rounded bg-white border border-dark'
        style={{
          height: '21px'
        }}
      >
        <div
          className='rounded bg-lightgrey'
          style={{
            position: 'relative',
            left: '0px',
            height: '20px',
            top: '0px',
            background: 'lightgrey',
            width: `${maxScorePossible(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers)}%`
          }}
        />
        <div
          style={{
            position: 'relative',
            left: '0px',
            height: '20px',
            background: 'gray',
            top: '-20px',
            // zIndex: 999,
            width: `${currentScore(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers)}%`
          }}
        />
        <div
          style={{
            position: 'relative',
            left: '0px',
            height: '20px',
            background: 'black',
            top: '-40px',
            width: `${minScorePossible(totalQuestions, totalQuestionsAnswered, totalCorrectAnswers)}%`
          }}
        />
      </div>
    </div>
  )
}
