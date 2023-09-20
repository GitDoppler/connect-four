import React from 'react'
import { useStore } from './Board'
import Logo from '../assets/images/logo.svg'

function Navbar() {
  console.log('Navbar re-rendered.')
  const handlePause = useStore((state) => state.togglePause)
  const handleRestart = useStore((state) => state.restart)
  return (
    <div className='flex items-center justify-between text-white xl:mx-auto xl:w-[39.5rem]'>
      <button
        className='w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase transition-[background] hover:bg-custom-pink'
        onClick={() => {
          handlePause()
        }}
      >
        Menu
      </button>
      <img src={Logo} alt='Logo' className='h-[2.5rem] w-[2.5rem] md:h-[3.25rem] md:w-[3.25rem]' />
      <button
        onClick={() => handleRestart()}
        className='w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase transition-[background] hover:bg-custom-pink'
      >
        Restart
      </button>
    </div>
  )
}

export default React.memo(Navbar)
