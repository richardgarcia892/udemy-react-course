import React from 'react'
import PropTypes from 'prop-types'

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} PLease lets get Started</h3>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'start' })}>Start Now!!</button>
    </div>
  )
}

export default StartScreen