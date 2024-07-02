import React from 'react'
import Star from '../../assets/star.svg'
import StarFill from '../../assets/star-fill.svg'
import { ratingAccordingToDifficulty } from '../../utils/ratingAccordingToDifficulty'

export default function Rating ({ difficulty }) {
  return (
    <div style={{ display: 'flex' }}>
      {
        Array(3).fill(0).map((_, index) => {
          if (index < ratingAccordingToDifficulty(difficulty)) {
            return <img key={index} src={StarFill} alt={'filled-star'} />
          } else {
            return <img key={index} src={Star} alt={'star'} />
          }
        })
      }
    </div>
  )
}
