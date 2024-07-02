import React, { useEffect, useMemo, useState } from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import Rating from '../rating/Rating'
import ScoreStats from '../scoreStats/ScoreStats'
import styled from 'styled-components'
import media from '../../utils/mediaQueries'

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: auto;
`

const ContentContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 2rem;
  ${media.mobile`width: 100%;`}
`

const QuestionContainer = styled.div`
  margin-top: 1rem;
`

const QuestionText = styled.p`
  text-align: left;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 2rem;
`

const OptionButton = styled.button`
  margin: 0.25rem;
  border-radius: 0.25rem;
  ${props => props.selected ? 'background-color: var(--dark-black); color: white;' : 'background-color: white; color: black;'}
`

const ResultMessage = styled.h1`
  margin-top: 1rem;
`

export default function QuizApp () {
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const [success, setSuccess] = useState(false)
  const [wrong, setWrong] = useState(false)

  const question = questions.length > 0 ? questions[currentQuestion] : []
  const allOptions = (question.correct_answer && question.incorrect_answers) ? [question.correct_answer, ...question.incorrect_answers] : []
  const shuffledOptions = useMemo(() => {
    return allOptions.sort(() => 0.5 - Math.random())
  }, [currentQuestion, questions])

  // Function to fetch the questions from the json server
  const getQuestions = async () => {
    try {
      let response = await fetch('http://localhost:3001/questions')
      let data = await response.json()
      setQuestions(data)
    } catch (err) {
      console.error(err)
    }
  }

  // Effect to fetch the questions as soon as the component is mounted
  useEffect(() => {
    getQuestions()
  }, [])

  // Event trigger of option select
  const handleOptionSelect = (chosenOption) => {
    if (selectedOption) return
    setSelectedOption(chosenOption)
    let correctAnswerFlag = false
    if (chosenOption === question.correct_answer) {
      setCorrectAnswers(correctAnswers + 1)
      setSuccess(true)
      correctAnswerFlag = true
      setWrong(false)
    } else {
      setWrong(true)
      setSuccess(false)
    }
    setAnsweredQuestions(answeredQuestions + 1)
    if (answeredQuestions === questions.length - 1) {
      // handleNextQuestion()
      if (currentQuestion >= questions.length - 1) {
        // setQuestions([])
        setCurrentQuestion(0)
        alert(`Your final score is ${((correctAnswerFlag ? correctAnswers + 1 : correctAnswers) / questions.length) * 100}%`)
        return null
      }
      return null
    }
  }

  // Function to switch over to next question with edge cases
  const handleNextQuestion = () => {
    if (currentQuestion >= questions.length - 1) {
      setQuestions([])
      alert(`Your final score is ${(correctAnswers / questions.length) * 100}%`)
      return
    }
    setSelectedOption(null)
    setSuccess(false)
    setWrong(false)
    setCurrentQuestion((prev) => prev + 1)
  }

  const handleResetQuiz = () => {
    setAnsweredQuestions(0)
    setCorrectAnswers(0)
    setCurrentQuestion(0)
    setSelectedOption(null)
    setSuccess(false)
    setWrong(false)
  }

  return (
    <QuizContainer className='container'>
      <ProgressBar
        totalQuestions={questions.length ? questions.length : 0}
        answeredQuestions={answeredQuestions}
      />

      <ContentContainer className='row'>
        <QuestionContainer className='col-12'>
          <h3>Question {currentQuestion + 1} of {questions.length ? questions.length : 0}</h3>
          <span>Entertainment: Board games</span>
          <Rating difficulty={question.difficulty ? question.difficulty : 0} />
        </QuestionContainer>

        <OptionsContainer className='col-12'>
          <QuestionText>{decodeURIComponent(question.question ? question.question : '')}</QuestionText>
          <div className='container'>
            <div className='row justify-content-center'>
              {shuffledOptions.map((singleOption) => (
                <OptionButton
                  key={singleOption}
                  className={`col-md-5 m-1 ${singleOption === selectedOption ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                  selected={singleOption === selectedOption}
                  onClick={() => handleOptionSelect(singleOption)}
                >
                  {decodeURIComponent(singleOption)}
                </OptionButton>
              ))}
            </div>
          </div>

          <div style={{ minHeight: '12.5rem', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <ResultMessage>
              {success ? 'Correct!' : wrong ? 'Sorry!' : null}
            </ResultMessage>

            {selectedOption && questions.length && (answeredQuestions <= questions.length - 1) ? (
              <button className='btn btn-primary mx-auto mt-4' onClick={handleNextQuestion}>Next Question</button>
            ) : (answeredQuestions > questions.length - 1) ? (
              <button onClick={handleResetQuiz}>Reset quiz</button>
            ) : null}
          </div>
        </OptionsContainer>

        <div className='col-12'>
          <ScoreStats
            totalQuestions={questions.length ? questions.length : 0}
            totalQuestionsAnswered={answeredQuestions}
            totalCorrectAnswers={correctAnswers}
          />
        </div>
      </ContentContainer>
    </QuizContainer>
  )
}
