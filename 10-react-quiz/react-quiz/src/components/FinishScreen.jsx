import React from "react";
import proptype from 'prop-types'

FinishScreen.propTypes = {
  points: proptype.number.isRequired,
  maxPosiblePoints: proptype.number.isRequired,
  highscore: proptype.number.isRequired,
  dispatch: proptype.func.isRequired
}


function FinishScreen({ points, maxPosiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPosiblePoints) * 100)
  return (
    <>
      <p className='result'>You scored <strong>{points}</strong> out of {maxPosiblePoints} ({percentage}%)</p>
      <p className='highscore'>(highscore: {highscore})</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset!
      </button>
    </>
  )
}

export default FinishScreen;