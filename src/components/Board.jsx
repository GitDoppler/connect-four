import { useState, useReducer } from 'react'
import Counter from './Counter'
import Navbar from './Navbar'
import Scoreboard from './Scoreboard'
import Playboard from './Playboard'
import Context from '../utils/context'
import * as ACTIONS from '../store/actions/actions'
import * as BoardReducer from '../store/reducers/boardReducer'

export default function Board() {
  const [stateBoardReducer, dispatchBoardReducer] = useReducer(
    BoardReducer.BoardReducer,
    BoardReducer.initialState
  )

  const handleRestart = () => {
    dispatchBoardReducer(ACTIONS.restart())
  }

  const handlePause = () => {
    dispatchBoardReducer(ACTIONS.pause())
  }

  const handleChangeTurn = () => {
    dispatchBoardReducer(ACTIONS.changeTurn())
  }

  const handlePlacePuck = (data) => {
    dispatchBoardReducer(ACTIONS.placePuck(data))
  }

  const handleFinish = () => {
    dispatchBoardReducer(ACTIONS.finish())
  }

  const handleEndTurn = () => {
    dispatchBoardReducer(ACTIONS.endTurn())
  }

  const handleCountDown = () => {
    dispatchBoardReducer(ACTIONS.countDown())
  }

  return (
    <Context.Provider
      value={{
        scoreP1: stateBoardReducer.scoreP1,
        scoreP2: stateBoardReducer.scoreP2,
        turn: stateBoardReducer.turn,
        turnEnd: stateBoardReducer.turnEnd,
        finished: stateBoardReducer.finished,
        matrix: stateBoardReducer.matrix,
        pause: stateBoardReducer.pause,
        time: stateBoardReducer.time,
        handleRestart: () => handleRestart(),
        handlePause: () => handlePause(),
        handleChangeTurn: () => handleChangeTurn(),
        handlePlacePuck: (matrix) => handlePlacePuck(matrix),
        handleFinish: () => handleFinish(),
        handleEndTurn: () => handleEndTurn(),
        handleCountDown: () => handleCountDown(),
      }}
    >
      <div className='flex min-h-screen flex-col justify-start'>
        <div className='mx-auto  w-[min(100%-40px,632px)] pt-12 xl:w-[64.625rem]'>
          <Navbar />
          <Scoreboard />
          <Playboard />
        </div>
        <Counter />
      </div>
    </Context.Provider>
  )
}
