import React, { useEffect, useReducer } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';

// Initial state
// Status list: Loading, error, ready, active, finished
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null
}

const SECS_PER_QUESTION = 30

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION
      }
    case 'newAnswer':
      {
        const question = state.questions.at(state.index)
        return {
          ...state,
          answer: action.payload,
          points: action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
        }
      }
    case 'nextQuestion':
      return {
        ...state, answer: null, index: state.index + 1
      }
    case 'finished':
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore
          ? state.points
          : state.highscore,
      }
    case 'reset':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready'
      }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0
          ? 'finished'
          : state.status
      }
    default:
      throw new Error("Action type not found")
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }))
  }, []
  )

  const numQuestions = questions.length
  const maxPosiblePoints = questions.reduce((acc, question) => acc + question.points, 0)
  return (
    <div className='app'>
      <Header />
      <Main >
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen
          numQuestions={numQuestions}
          dispatch={dispatch} />}
        {status === 'active' &&
          (<>
            <Progress
              index={index + 1}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              maxPosiblePoints={maxPosiblePoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer} />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
          )}

        {status === 'finished' && <FinishScreen
          points={points}
          maxPosiblePoints={maxPosiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />}

      </Main >
    </div>
  )
}