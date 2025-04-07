import React, { useEffect } from 'react'
import propsTypes from 'prop-types';

Timer.propTypes = {
  dispatch: propsTypes.func.isRequired,
  secondsRemaining: propsTypes.number.isRequired
}

function Timer({ dispatch, secondsRemaining }) {

  const mins = Math.floor(secondsRemaining / 60)
  const secs = secondsRemaining % 60
  const time = `${mins}:${secs < 10 ? '0' : ''}${secs}`

  useEffect(() => {
    // Create a timer that dispatches a tick action every second
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    // Clean up the timer
    return () => clearInterval(id)
    // attach the dispatch function to the dependency
  }, [dispatch])


  return (
    <div className='timer'>
      {time}
    </div>
  )
}

export default Timer  