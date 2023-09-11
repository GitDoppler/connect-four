import { useEffect, useState, useRef, forwardRef, useContext, useReducer } from 'react'
import { TurnContext, PauseContext } from '../App'

const DECREMENT_TIME = 'DECREMENT_TIME'
const SWITCH_TURN = 'SWITCH_TURN'

function counterReducer(state, action) {
  switch (action.type) {
    case DECREMENT_TIME:
      return { ...state, time: state.time - 1 }
    case SWITCH_TURN:
      // Here, we only handle the time reset, not the turn switch
      return { ...state, time: 15 }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function Counter({ turnEnd, setTurnEnd }) {
  const { turn, setTurn } = useContext(TurnContext)
  const { pause, setPause } = useContext(PauseContext)
  const initialState = { time: 15 }
  const [state, dispatch] = useReducer(counterReducer, initialState)

  useEffect(() => {
    if (pause) return

    if (turnEnd) {
      setTurn((currentTurn) => (currentTurn === 'P1' ? 'P2' : 'P1'))
      dispatch({ type: SWITCH_TURN })
      setTurnEnd(false)
      return
    }

    const interval = setInterval(() => {
      if (state.time <= 1) {
        setTurn((currentTurn) => (currentTurn === 'P1' ? 'P2' : 'P1'))
        dispatch({ type: SWITCH_TURN })
      } else {
        dispatch({ type: DECREMENT_TIME })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [state.time, turnEnd, pause, setTurn])

  return (
    <div className='mb-auto mt-5 flex-grow rounded-t-[3.75rem] bg-custom-dark-purple pb-5'>
      <div
        className={
          'relative z-40 mx-auto flex h-[9.375rem] max-w-[11.9375rem] flex-col items-center justify-center gap-1 rounded-2xl  bg-cover bg-no-repeat shadow-[0_10px_0_0_#000] ' +
          `${
            turn === 'P1'
              ? 'bg-[url(../../src/assets/images/turn-background-red.svg)]'
              : 'bg-[url(../../src/assets/images/turn-background-yellow.svg)]'
          }`
        }
      >
        <div className=' text-base font-bold text-white'>{`Player ${
          turn === 'P1' ? '1' : '2'
        }'s turn`}</div>
        <div className=' text-6xl font-bold text-white'>{`${state.time}s`}</div>
      </div>
    </div>
  )
}
