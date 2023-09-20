import ScoreboardPlayer from './ScoreboardPlayer'
import ScoreboardCPU from './ScoreboardCPU'
import { useContext } from 'react'
import { StartCPUContext } from '../App'
import { useStore } from './Board'

export default function Scoreboard() {
  const scoreP1 = useStore((state) => state.scoreP1)
  const scoreP2 = useStore((state) => state.scoreP2)
  const { startCPU, setStartCPU } = useContext(StartCPUContext)

  return (
    <div className='flex justify-center gap-5 pt-12 font-bold xl:hidden'>
      <ScoreboardPlayer score={scoreP1} player={'P1'} desktop={false} />
      {!startCPU && <ScoreboardPlayer score={scoreP2} player={'P2'} desktop={false} />}
      {startCPU && <ScoreboardCPU score={scoreP2} desktop={false} />}
    </div>
  )
}
