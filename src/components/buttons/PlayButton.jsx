import startIcon from '../../assets/images/player-vs-player.svg'
import { useContext } from 'react'
import { StartPlayerContext } from '../../App'

export default function PlayButton() {
  const { startPlayer, setStartPlayer } = useContext(StartPlayerContext)

  return (
    <button
      onClick={() => {
        setStartPlayer(!startPlayer)
      }}
      className='w-full rounded-2xl border-4 border-black bg-custom-yellow shadow-[0_10px_0_0_#000] hover:border-custom-dark-purple hover:shadow-[0_10px_0_0_#5C2DD5]'
      aria-label='Play against player'
    >
      <div className='m-5 flex items-center justify-between'>
        <div className=' font-[SpaceGrotesk] text-2xl font-bold uppercase'>Play vs player</div>
        <img src={startIcon} className='h-[2.875rem] w-[5.375rem]' alt='Play against player'></img>
      </div>
    </button>
  )
}
