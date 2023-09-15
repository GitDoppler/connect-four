import ScoreboardPlayer from './ScoreboardPlayer'
import { useContext } from 'react'
import Context from '../utils/context'

export default function Scoreboard() {
  const context = useContext(Context)

  return (
    <div className='flex justify-center gap-5 pt-12 font-bold xl:hidden'>
      <ScoreboardPlayer score={context.scoreP1} player={'P1'} desktop={false} />
      <ScoreboardPlayer score={context.scoreP2} player={'P2'} desktop={false} />
    </div>
  )
}
