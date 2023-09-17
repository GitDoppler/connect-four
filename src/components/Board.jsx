import { useState, useReducer } from 'react'
import Counter from './Counter'
import Navbar from './Navbar'
import Scoreboard from './Scoreboard'
import Playboard from './Playboard'
import Context from '../utils/context'
import * as ACTIONS from '../store/actions/actions'
import * as BoardReducer from '../store/reducers/boardReducer'
import PauseMenu from './PauseMenu'
import { AnimatePresence } from 'framer-motion'

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

  const handleUpdateMatrix = (data) => {
    dispatchBoardReducer(ACTIONS.updateMatrix(data))
  }

  const handleFinish = (data) => {
    dispatchBoardReducer(ACTIONS.finish(data))
  }

  const handleCountDown = () => {
    dispatchBoardReducer(ACTIONS.countDown())
  }

  const handleP1 = () => {
    dispatchBoardReducer(ACTIONS.p1())
  }

  const handleP2 = () => {
    dispatchBoardReducer(ACTIONS.p2())
  }

  const handleReplay = () => {
    dispatchBoardReducer(ACTIONS.replay())
  }

  return (
    <Context.Provider
      value={{
        scoreP1: stateBoardReducer.scoreP1,
        scoreP2: stateBoardReducer.scoreP2,
        turn: stateBoardReducer.turn,
        finished: stateBoardReducer.finished,
        matrix: stateBoardReducer.matrix,
        pause: stateBoardReducer.pause,
        time: stateBoardReducer.time,
        winner: stateBoardReducer.winner,
        handleRestart: () => handleRestart(),
        handlePause: () => handlePause(),
        handleChangeTurn: () => handleChangeTurn(),
        handleUpdateMatrix: (matrix) => handleUpdateMatrix(matrix),
        handleFinish: (winner) => handleFinish(winner),
        handleCountDown: () => handleCountDown(),
        handleP1: () => handleP1(),
        handleP2: () => handleP2(),
        handleReplay: () => handleReplay(),
      }}
    >
      <div className='relative flex min-h-screen animate-spawn flex-col justify-start'>
        <div className='mx-auto  w-[min(100%-2.5rem,39.5rem)] pt-12 xl:w-[64.625rem]'>
          <Navbar />
          <Scoreboard />
          <Playboard />
        </div>
        <Counter />
        <AnimatePresence>{stateBoardReducer.pause && <PauseMenu />}</AnimatePresence>
      </div>
    </Context.Provider>
  )
}
