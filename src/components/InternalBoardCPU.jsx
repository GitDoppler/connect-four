import WhiteBoardSmall from '../assets/images/board-layer-white-small.svg'
import BlackBoardSmall from '../assets/images/board-layer-black-small.svg'
import WhiteBoardLarge from '../assets/images/board-layer-white-large.svg'
import BlackBoardLarge from '../assets/images/board-layer-black-large.svg'
import RedPuck from '../assets/images/counter-red-large.svg'
import YellowPuck from '../assets/images/counter-yellow-large.svg'
import MarkerRed from '../assets/images/marker-red.svg'
import MarkerYellow from '../assets/images/marker-yellow.svg'
import { useState, useContext, useEffect } from 'react'
import { getUpdatedMatrix, checkWin } from '../utils/matrix'
import { getUpdatedMatrixCPU } from '../utils/CPU'
import { StartCPUContext } from '../App'
import { useStore } from './Board'

export default function InternalBoard() {
  const turn = useStore((state) => state.turn)
  const matrix = useStore((state) => state.matrix)
  const finished = useStore((state) => state.finished)
  const handleUpdateMatrix = useStore((state) => state.updateMatrix)
  const handleFinish = useStore((state) => state.finish)
  const handleChangeTurn = useStore((state) => state.changeTurn)

  const { startCPU, setStartCPU } = useContext(StartCPUContext)
  const [pings, setPings] = useState(createArray(7))
  const piece = turn === 'P1' ? 1 : -1

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

  function handleClick(
    indexRow,
    indexCol,
    piece,
    startCPU,
    turn,
    finished,
    matrix,
    handleUpdateMatrix,
    handleFinish,
    handleChangeTurn
  ) {
    if (startCPU === true && turn === 'P2') return null
    const updatedMatrix = getUpdatedMatrix(indexRow, indexCol, piece, matrix)
    if (!finished && updatedMatrix) {
      const stateGame = checkWin(updatedMatrix)
      handleUpdateMatrix(stateGame.matrix)
      if (stateGame.isWin == false) {
        if (stateGame.isFull == true) {
          handleFinish('tie')
          return
        }
        handleChangeTurn()
        return
      }
      handleFinish(stateGame.winner)
    }
  }

  useEffect(() => {
    if (startCPU == false || turn === 'P1' || finished == true) return

    const updatedMatrix = getUpdatedMatrixCPU(matrix)
    const stateGame = checkWin(updatedMatrix)
    if (time == 13) {
      handleUpdateMatrix(stateGame.matrix)
      if (stateGame.isWin == false) {
        if (stateGame.isFull == true) {
          handleFinish('tie')
          return
        }
        handleChangeTurn()
        return
      }
      handleFinish(stateGame.winner)
    }
  }, [turn, time])

  return (
    <div className=' relative mx-auto mt-16 flex aspect-[1.25219/1] w-full flex-wrap items-center justify-center gap-[3.797%] md:mt-20 md:gap-[1.5rem] xl:w-[39.5rem]'>
      <div className='absolute top-[-3.75rem] z-50 hidden w-full justify-center gap-[3.797%] md:gap-[1.5rem] lg:flex '>
        {pings.map((e, indexPing) => (
          <div
            className={`flex w-[10.1492%] justify-center ${e === 1 ? 'opacity-100' : 'opacity-0'}`}
            key={indexPing}
          >
            <img src={turn === 'P1' ? MarkerRed : MarkerYellow} />
          </div>
        ))}
      </div>
      {matrix.map((row, indexRow) =>
        row.map((e, indexCol) => (
          <div
            className='relative aspect-square w-[10.1492%] md:w-[4rem]'
            key={indexRow + '-' + indexCol}
          >
            <button
              className='relative z-30 flex h-full w-full items-center justify-center rounded-full'
              onClick={() =>
                handleClick(
                  indexRow,
                  indexCol,
                  piece,
                  startCPU,
                  turn,
                  finished,
                  matrix,
                  handleUpdateMatrix,
                  handleFinish,
                  handleChangeTurn
                )
              }
              onMouseEnter={() => handleHover(indexCol)}
            >
              {(matrix[indexRow][indexCol] == -2 || matrix[indexRow][indexCol] == 2) && (
                <div className='mt-1 flex h-[58.8%] w-[58.8%] animate-spawn items-center justify-center rounded-full bg-white'>
                  <div
                    className={`h-[40%] w-[40%] rounded-full ${
                      matrix[indexRow][indexCol] > 0 ? 'bg-custom-pink' : 'bg-custom-yellow'
                    }`}
                  ></div>
                </div>
              )}
            </button>

            {matrix[indexRow][indexCol] != 0 ? (
              <img
                src={matrix[indexRow][indexCol] > 0 ? RedPuck : YellowPuck}
                className={`absolute left-[calc(50%-calc((100%+0.5rem)/2))] top-0 z-10 aspect-square w-[calc(100%+0.5rem)] max-w-none animate-fall md:left-[-0.25rem]`}
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
      <img src={BlackBoardSmall} alt='' className='absolute top-[-3.7%] z-0 w-full md:hidden'></img>
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
  )
}
