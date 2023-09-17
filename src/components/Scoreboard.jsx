import ScoreboardPlayer from './ScoreboardPlayer'
import ScoreboardCPU from './ScoreboardCPU'
import { useContext } from 'react'
import Context from '../utils/context'
import { StartCPUContext } from '../App'

export default function Scoreboard() {
  const context = useContext(Context)
  const { startCPU, setStartCPU } = useContext(StartCPUContext)

  return (
    <div className='flex justify-center gap-5 pt-12 font-bold xl:hidden'>
      <ScoreboardPlayer score={context.scoreP1} player={'P1'} desktop={false} />
      {!startCPU && <ScoreboardPlayer score={context.scoreP2} player={'P2'} desktop={false} />}
      {startCPU && <ScoreboardCPU score={context.scoreP2} desktop={false} />}
    </div>
  )
}
