import { forwardRef } from 'react'

const PauseButton = forwardRef(function PauseButton(props, paused) {
  return (
    <button
      className='mt-9'
      onClick={() => {
        paused.current = !paused.current
        console.log(`The state of the pause button: ${paused.current}`)
      }}
    >
      <div className='rounded-2xl border-4 border-black bg-white px-8 py-5 text-center text-2xl font-bold shadow-[0_10px_0_0_#000]'>
        Pause
      </div>
    </button>
  )
})

export default PauseButton
