import { useContext } from 'react'
import Context from '../utils/context'
import { StartPlayerContext, StartCPUContext } from '../App'
import { motion } from 'framer-motion'

export default function PauseMenu() {
  const context = useContext(Context)
  const { startPlayer, setStartPlayer } = useContext(StartPlayerContext)
  const { startCPU, setStartCPU } = useContext(StartCPUContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' absolute left-0 top-0 z-[60] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]'
    >
      <div className='flex w-[min(100%-2.5rem,30rem)] justify-center rounded-[2.5rem] border-4 border-black bg-custom-purple shadow-[0_10px_0_0_#000]'>
        <div className='flex w-[min(100%-2.5rem,25rem)] flex-col items-center justify-between gap-7 py-7 font-bold uppercase md:gap-11 md:py-12'>
          <p className=' text-6xl text-white'>Pause</p>
          <div className='flex w-full flex-col justify-between gap-7'>
            <button
              className='flex h-[4.5rem] w-full items-center justify-center rounded-2xl border-4 border-black bg-white text-2xl font-bold uppercase shadow-[0_10px_0_0_#000]'
              onClick={() => context.handlePause()}
            >
              Continue game
            </button>
            <button
              className='flex h-[4.5rem] w-full items-center justify-center rounded-2xl border-4 border-black bg-white text-2xl font-bold uppercase shadow-[0_10px_0_0_#000]'
              onClick={() => context.handleRestart()}
            >
              Restart
            </button>
            <button
              className='flex h-[4.5rem] w-full items-center justify-center rounded-2xl border-4 border-black bg-custom-pink text-2xl font-bold uppercase text-white shadow-[0_10px_0_0_#000]'
              onClick={() => {
                context.handleFinish()
                if (startPlayer === true) {
                  setStartPlayer(false)
                }
                if (startCPU === true) {
                  setStartCPU(false)
                }
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
