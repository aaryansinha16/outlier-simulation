import React from 'react'

export default function ProgressBar ({
  totalQuestions,
  answeredQuestions
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '20px',
        background: 'lightgrey'
      }}
    >
      <div
        style={{
          position: 'relative',
          left: 0,
          height: '20px',
          background: 'black',
          width: `${(answeredQuestions / totalQuestions) * 100}%`
        }} />
    </div>
  )
}
