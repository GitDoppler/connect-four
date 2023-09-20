import { useEffect } from 'react'
import { useStore } from './Board'

export default function Counter() {
  const pause = useStore((state) => state.pause)
  const turn = useStore((state) => state.turn)
  const finished = useStore((state) => state.finished)
  const time = useStore((state) => state.time)
  const winner = useStore((state) => state.winner)
  const handleReplay = useStore((state) => state.replay)
  const handleCountDown = useStore((state) => state.countDown)
  const handleChangeTurn = useStore((state) => state.changeTurn)

  useEffect(() => {
    if (pause) return

    const interval = setInterval(() => {
      if (time <= 1) {
        handleChangeTurn()
      } else {
        handleCountDown()
      }
    }, 1000)

    if (finished === true) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [time, pause, finished])

  function handleClick() {
    handleReplay()
  }

  function handleChange() {
    if (finished == false || winner === 'tie') return 'bg-custom-dark-purple'

    if (turn == 'P1') return 'bg-custom-pink'

    return 'bg-custom-yellow'
  }

  function nameDisplay(winner) {
    if (winner === 'P1') return 'Player 1'
    if (winner === 'P2') return 'Player 2'
    return 'No winner'
  }

  return (
    <div
      className={`mb-auto mt-5 flex-grow rounded-t-[3.75rem] ${handleChange()} pb-5 transition-[background]`}
    >
      {finished === false ? (
        <div
          className={
            'relative z-40 mx-auto flex h-[9.375rem] max-w-[11.9375rem] flex-col items-center justify-center gap-1 rounded-2xl  bg-cover bg-no-repeat shadow-[0_10px_0_0_#000] ' +
            `${
              turn === 'P1'
                ? 'bg-[url(/turn-background-red.svg)]'
                : 'bg-[url(/turn-background-yellow.svg)]'
            }`
          }
        >
          <div className=' text-base font-bold text-white'>{`Player ${
            turn === 'P1' ? '1' : '2'
          }'s turn`}</div>
          <div className=' text-6xl font-bold text-white'>{`${time}s`}</div>
        </div>
      ) : (
        <div className='relative z-40 mx-auto flex h-[10rem] w-[17.8125rem] flex-col items-center justify-center rounded-2xl border-4 border-black bg-white font-bold uppercase shadow-[0_10px_0_0_#000]'>
          <div className='text-base'>{nameDisplay(winner)}</div>
          <div className=' text-6xl'>{winner === 'tie' ? 'Tie' : 'Wins'}</div>
          <button
            onClick={handleClick}
            className='rounded-2xl bg-custom-dark-purple px-5 py-2 text-base uppercase text-white transition-[background] hover:bg-custom-pink'
          >
            Play again
          </button>
        </div>
      )}
    </div>
  )
}
