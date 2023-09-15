import { useContext } from 'react'
import Context from '../utils/context'
import { StartPlayerContext } from '../App'
import { motion } from 'framer-motion'

export default function PauseMenu() {
  const context = useContext(Context)
  const { startPlayer, setStartPlayer } = useContext(StartPlayerContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' absolute left-0 top-0 z-[60] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]'
    >
      <div className='flex w-[min(100%-40px,480px)] justify-center rounded-[40px] border-4 border-black bg-custom-purple shadow-[0_10px_0_0_#000]'>
        <div className='flex w-[min(100%-40px,400px)] flex-col items-center justify-between gap-7 py-7 font-bold uppercase md:gap-11 md:py-12'>
          <p className=' text-6xl text-white'>Pause</p>
          <div className='flex w-full flex-col justify-between gap-7'>
            <button
              className='flex h-[72px] w-full items-center justify-center rounded-2xl border-4 border-black bg-white text-2xl font-bold uppercase shadow-[0_10px_0_0_#000]'
              onClick={() => context.handlePause()}
            >
              Continue game
            </button>
            <button
              className='flex h-[72px] w-full items-center justify-center rounded-2xl border-4 border-black bg-white text-2xl font-bold uppercase shadow-[0_10px_0_0_#000]'
              onClick={() => context.handleRestart()}
            >
              Restart
            </button>
            <button
              className='flex h-[72px] w-full items-center justify-center rounded-2xl border-4 border-black bg-custom-pink text-2xl font-bold uppercase text-white shadow-[0_10px_0_0_#000]'
              onClick={() => {
                context.handleFinish()
                setStartPlayer(!startPlayer)
              }}
            >
              Quit game
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
