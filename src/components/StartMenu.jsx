import PlayButton from './buttons/PlayButton'
import CPUButton from './buttons/CPUButton'
import RulesButton from './buttons/RulesButton'
import logo from '../../src/assets/images/logo.svg'
import { motion } from 'framer-motion'

export default function StartMenu() {
  return (
    <div className='flex min-h-screen w-full items-center pb-3'>
      <motion.div
        key='menu'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='mx-auto w-[min(100%-2.5rem,30rem)]'
      >
        <div className='flex flex-col items-center gap-7 md:rounded-[2.5rem] md:border-4 md:border-black md:bg-custom-purple md:px-10 md:pb-14 md:pt-16 md:shadow-[0_10px_0_0_#000]'>
          <img src={logo} alt='Logo' className='h-[4rem] w-[4rem]' />
          <PlayButton />
          <CPUButton />
          <RulesButton />
        </div>
      </motion.div>
    </div>
  )
}
