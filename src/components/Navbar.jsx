import { PauseContext } from '../App'
import { useContext } from 'react'
import Logo from '../assets/images/logo.svg'

export default function Navbar() {
  const { pause, setPause } = useContext(PauseContext)

  return (
    <div className='flex items-center justify-between text-white xl:mx-auto xl:w-[39.5rem]'>
      <button
        className='w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase'
        onClick={() => {
          setPause(!pause)
        }}
      >
        Menu
      </button>
      <img src={Logo} alt='Logo' className='h-[2.5rem] w-[2.5rem] md:h-[3.25rem] md:w-[3.25rem]' />
      <button className='w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase'>
        Restart
      </button>
    </div>
  )
}
