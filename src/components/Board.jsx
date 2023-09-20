import React from 'react'
import Counter from './Counter'
import Navbar from './Navbar'
import Scoreboard from './Scoreboard'
import Playboard from './Playboard'
import PauseMenu from './PauseMenu'
import { AnimatePresence } from 'framer-motion'
import { create } from 'zustand'
import { createMatrix } from '../utils/matrix'

export const useStore = create((set) => ({
  scoreP1: 0,
  scoreP2: 0,
  turn: 'P1',
  finished: false,
  matrix: createMatrix(6, 7),
  pause: false,
  time: 15,
  winner: '',

  restart: () =>
    set({
      scoreP1: 0,
      scoreP2: 0,
      turn: 'P1',
      finished: false,
      matrix: createMatrix(6, 7),
      pause: false,
      time: 15,
      winner: '',
    }),

  togglePause: () => set((state) => ({ pause: !state.pause })),

  changeTurn: () =>
    set((state) => ({
      turn: state.turn === 'P1' ? 'P2' : 'P1',
      time: 15,
    })),

  updateMatrix: (matrix) => set({ matrix }),

  finish: (winner) =>
    set((state) => ({
      finished: true,
      winner,
      scoreP1: winner !== 'tie' && winner === 'P1' ? state.scoreP1 + 1 : state.scoreP1,
      scoreP2: winner !== 'tie' && winner === 'P2' ? state.scoreP2 + 1 : state.scoreP2,
    })),

  countDown: () => set((state) => ({ time: state.time - 1 })),

  replay: () =>
    set((state) => ({
      turn: state.turn === 'P1' ? 'P2' : 'P1',
      finished: false,
      matrix: createMatrix(6, 7),
      pause: false,
      time: 15,
    })),
}))

export default function Board() {
  const pause = useStore((state) => state.pause)

  return (
    <div className='relative flex min-h-screen animate-spawn flex-col justify-start'>
      <div className='mx-auto  w-[min(100%-2.5rem,39.5rem)] pt-12 xl:w-[64.625rem]'>
        <Navbar />
        <Scoreboard />
        <Playboard />
      </div>
      <Counter />
      <AnimatePresence>{pause && <PauseMenu />}</AnimatePresence>
    </div>
  )
}
