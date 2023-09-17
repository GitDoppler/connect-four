import Player1 from '../assets/images/player-one.svg'
import Player2 from '../assets/images/player-two.svg'

export default function ScoreboardPlayer({ score, player, desktop }) {
  return (
    <>
      {desktop === false ? (
        <div className='relative w-[42.388%] rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000]'>
          <div
            className={`flex flex-col items-center justify-center px-8 py-2 uppercase ${
              player === 'P1' ? 'md:flex-row' : 'md:flex-row-reverse'
            } md:gap-5 md:py-4`}
          >
            <div className='md:text-xl'>{player === 'P1' ? 'Player 1' : 'Player 2'}</div>
            <div className='text-3xl md:text-6xl'>{score}</div>
          </div>
          <img
            src={player === 'P1' ? Player1 : Player2}
            alt={player === 'P1' ? 'Player 1' : 'Player 2'}
            className={`absolute ${
              player === 'P1' ? 'left-[-1.6875rem]' : 'right-[-1.6875rem]'
            } top-[15%] h-[3.6875rem] w-[3.375rem]`}
          />
        </div>
      ) : (
        <div className='relative hidden h-[10rem] w-[8.8125rem] rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000] xl:block'>
          <div className='flex h-full flex-col items-center uppercase'>
            <div className='pt-11 text-xl'>{player === 'P1' ? 'Player 1' : 'Player 2'}</div>
            <div className='text-6xl'>{score}</div>
          </div>
          <img
            src={player === 'P1' ? Player1 : Player2}
            alt={player === 'P1' ? 'Player 1' : 'Player 2'}
            className='absolute left-[2.46875rem] top-[-1.84376rem] h-[3.6875rem] w-[3.375rem]'
          />
        </div>
      )}
    </>
  )
}
