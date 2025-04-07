import React from 'react'
import propsTypes from 'prop-types'

NextButton.propTypes = {
  dispatch: propsTypes.func.isRequired,
  answer: propsTypes.string.isRequired,
  index: propsTypes.number.isRequired,
  numQuestions: propsTypes.number.isRequired
}


function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null
  console.log('index', index)
  console.log('numQuestions', numQuestions)
  if (index < numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    )
  if (index === numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finished' })}
      >
        See result!
      </button>
    )
}

export default NextButton