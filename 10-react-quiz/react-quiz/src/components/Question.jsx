import React from "react";

import PropTypes from 'prop-types'
import Options from './Options';

Question.propTypes = {
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired

}


function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer} />
    </div>
  )
}

export default Question