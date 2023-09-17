import { useEffect, useContext } from 'react'
import Context from '../utils/context'

export default function Counter() {
  const context = useContext(Context)

  useEffect(() => {
    if (context.pause) return

    if (context.turnEnd) {
      context.handleChangeTurn()
      context.handleEndTurn()
      return
    }

    const interval = setInterval(() => {
      if (context.time <= 1) {
        context.handleChangeTurn()
      } else {
        context.handleCountDown()
      }
    }, 1000)

    if (context.finished === true) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [context.time, context.turnEnd, context.pause, context.finished])

  function handleClick() {
    context.handleReplay()
  }

  function handleChange() {
    if (context.finished == false || context.winner === 'tie') return 'bg-custom-dark-purple'

    if (context.turn == 'P1') return 'bg-custom-pink'

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
      {context.finished === false ? (
        <div
          className={
            'relative z-40 mx-auto flex h-[9.375rem] max-w-[11.9375rem] flex-col items-center justify-center gap-1 rounded-2xl  bg-cover bg-no-repeat shadow-[0_10px_0_0_#000] ' +
            `${
              context.turn === 'P1'
                ? 'bg-[url(../../public/turn-background-red.svg)]'
                : 'bg-[url(../../public/turn-background-yellow.svg)]'
            }`
          }
        >
          <div className=' text-base font-bold text-white'>{`Player ${
            context.turn === 'P1' ? '1' : '2'
          }'s turn`}</div>
          <div className=' text-6xl font-bold text-white'>{`${context.time}s`}</div>
        </div>
      ) : (
        <div className='relative z-40 mx-auto flex h-[10rem] w-[17.8125rem] flex-col items-center justify-center rounded-2xl border-4 border-black bg-white font-bold uppercase shadow-[0_10px_0_0_#000]'>
          <div className='text-base'>{nameDisplay(context.winner)}</div>
          <div className=' text-6xl'>{context.winner === 'tie' ? 'Tie' : 'Wins'}</div>
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
