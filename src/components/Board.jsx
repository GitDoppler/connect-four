import { useState, useReducer } from 'react'
import Counter from './Counter'
import Navbar from './Navbar'
import Scoreboard from './Scoreboard'
import Playboard from './Playboard'
import Context from '../utils/context'
import * as ACTIONS from '../store/actions/actions'
import * as BoardReducer from '../store/reducers/boardReducer'
import PauseMenu from './PauseMenu'
import { motion, AnimatePresence } from 'framer-motion'

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

  const handleFinish = (data) => {
    dispatchBoardReducer(ACTIONS.finish(data))
  }

  const handleEndTurn = () => {
    dispatchBoardReducer(ACTIONS.endTurn())
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
        turnEnd: stateBoardReducer.turnEnd,
        finished: stateBoardReducer.finished,
        matrix: stateBoardReducer.matrix,
        pause: stateBoardReducer.pause,
        time: stateBoardReducer.time,
        handleRestart: () => handleRestart(),
        handlePause: () => handlePause(),
        handleChangeTurn: () => handleChangeTurn(),
        handlePlacePuck: (matrix) => handlePlacePuck(matrix),
        handleFinish: (matrix) => handleFinish(matrix),
        handleEndTurn: () => handleEndTurn(),
        handleCountDown: () => handleCountDown(),
        handleP1: () => handleP1(),
        handleP2: () => handleP2(),
        handleReplay: () => handleReplay(),
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='relative flex min-h-screen flex-col justify-start'
      >
        <div className='mx-auto  w-[min(100%-40px,632px)] pt-12 xl:w-[64.625rem]'>
          <Navbar />
          <Scoreboard />
          <Playboard />
        </div>
        <Counter />
        <AnimatePresence>{stateBoardReducer.pause && <PauseMenu />}</AnimatePresence>
      </motion.div>
    </Context.Provider>
  )
}
