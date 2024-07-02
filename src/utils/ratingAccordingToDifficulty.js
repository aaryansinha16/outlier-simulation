const ratingAccordingToDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'easy': {
      return 1
    }
    case 'medium': {
      return 2
    }
    case 'hard': {
      return 3
    }
    default: {
      return null
    }
  }
}

module.exports = {
  ratingAccordingToDifficulty
}
