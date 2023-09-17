import { useContext } from 'react'
import { RulesContext } from '../../App'

export default function CPUButton() {
  const { rules, setRules } = useContext(RulesContext)

  //Div has height specified to be as tall as other buttons.
  return (
    <button
      onClick={() => {
        setRules(!rules)
      }}
      className='w-full rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000] hover:border-custom-dark-purple hover:shadow-[0_10px_0_0_#5C2DD5]'
      aria-label='Rules'
    >
      <div className='m-5 flex h-[2.875rem] items-center justify-between'>
        <div className=' font-[SpaceGrotesk] text-2xl font-bold uppercase'>Game rules</div>
      </div>
    </button>
  )
}
