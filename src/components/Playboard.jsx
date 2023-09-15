import WhiteBoardSmall from '../assets/images/board-layer-white-small.svg'
import BlackBoardSmall from '../assets/images/board-layer-black-small.svg'
import WhiteBoardLarge from '../assets/images/board-layer-white-large.svg'
import BlackBoardLarge from '../assets/images/board-layer-black-large.svg'
import RedPuck from '../assets/images/counter-red-large.svg'
import YellowPuck from '../assets/images/counter-yellow-large.svg'
import MarkerRed from '../assets/images/marker-red.svg'
import MarkerYellow from '../assets/images/marker-yellow.svg'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { updateMatrix, checkWin } from '../utils/matrix'
import ScoreboardPlayer from './ScoreboardPlayer'
import Context from '../utils/context'

export default function Playboard() {
  const context = useContext(Context)
  const [pings, setPings] = useState(createArray(7))
  const piece = context.turn === 'P1' ? 1 : -1

  function createArray(size) {
    const array = new Array(size).fill(0)
    return array
  }

  function handleHover(indexCol) {
    const nextPings = pings.map((elem, index) => {
      if (index === indexCol) {
        return 1
      } else {
        return 0
      }
    })
    setPings(nextPings)
  }

  return (
    <div className='w-full font-bold xl:flex xl:items-center xl:justify-center xl:gap-[3.75rem]'>
      <ScoreboardPlayer score={context.scoreP1} player={'P1'} desktop={true} />

      <div className=' relative mx-auto mt-16 flex aspect-[1.25219/1] w-full flex-wrap items-center justify-center gap-[3.797%] md:mt-20 md:gap-[1.5rem] xl:w-[39.5rem]'>
        <div className='absolute top-[-3.75rem] z-50 hidden w-full justify-center gap-[3.797%] md:gap-[1.5rem] lg:flex '>
          {pings.map((e, indexPing) => (
            <div
              className={`flex w-[10.1492%] justify-center ${
                e === 1 ? 'opacity-100' : 'opacity-0'
              }`}
              key={indexPing}
            >
              <img src={context.turn === 'P1' ? MarkerRed : MarkerYellow} />
            </div>
          ))}
        </div>
        {context.matrix.map((row, indexRow) =>
          row.map((e, indexCol) => (
            <div
              className='relative aspect-square w-[10.1492%] md:w-[4rem]'
              key={indexRow + '-' + indexCol}
            >
              <button
                className='relative z-30 block h-full w-full rounded-full'
                onClick={() => {
                  const updatedMatrix = updateMatrix(indexRow, indexCol, piece, context.matrix)
                  if (updatedMatrix) {
                    if (checkWin(updatedMatrix) == true) {
                      console.log('Winner has been found.')
                      context.handleFinish()
                    }
                    console.log(updatedMatrix)
                    context.handlePlacePuck(updatedMatrix)
                    context.handleEndTurn()
                    console.log(context.matrix)
                  }
                }}
                onMouseEnter={() => handleHover(indexCol)}
              ></button>

              {context.matrix[indexRow][indexCol] != 0 ? (
                <motion.img
                  initial={{ top: '-120%' }}
                  animate={{ top: '0px' }}
                  src={context.matrix[indexRow][indexCol] == 1 ? RedPuck : YellowPuck}
                  className={`absolute left-[calc(50%-calc((100%+0.5rem)/2))] z-10 aspect-square w-[calc(100%+0.5rem)] max-w-none md:left-[-0.25rem]`}
                />
              ) : null}
            </div>
          ))
        )}
        <img
          src={WhiteBoardSmall}
          alt=''
          className='absolute top-[-3.7%] z-20 w-full md:hidden'
        ></img>
        <img
          src={BlackBoardSmall}
          alt=''
          className='absolute top-[-3.7%] z-0 w-full md:hidden'
        ></img>
        <img
          src={WhiteBoardLarge}
          alt=''
          className='absolute left-0 top-[-1.25rem] z-20 hidden md:block'
        ></img>
        <img
          src={BlackBoardLarge}
          alt=''
          className='absolute left-0 top-[-1.25rem] z-0 hidden md:block'
        ></img>
      </div>

      <ScoreboardPlayer score={context.scoreP2} player={'P2'} desktop={true} />
    </div>
  )
}
