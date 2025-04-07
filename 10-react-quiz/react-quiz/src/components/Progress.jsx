import React from "react";
import propsTypes from 'prop-types'

Progress.propTypes = {
  index: propsTypes.number.isRequired,
  numQuestions: propsTypes.number.isRequired,
  points: propsTypes.number.isRequired,
  maxPosiblePoints: propsTypes.number.isRequired,
  answer: propsTypes.string // null or string
}

function Progress({ index, numQuestions, points, answer, maxPosiblePoints }) {
  return (
    <header className='progress'>
      <progress value={index + Number(answer !== null)} max={numQuestions}></progress>
      <p>Question <strong>{index}</strong>/ {numQuestions}</p>
      <p>{points} / {maxPosiblePoints}</p>
    </header>
  )
}

export default Progress;