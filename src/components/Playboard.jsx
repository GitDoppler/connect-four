import { useContext } from 'react'
import ScoreboardPlayer from './ScoreboardPlayer'
import ScoreboardCPU from './ScoreboardCPU'
import { StartCPUContext } from '../App'
import { useStore } from './Board'
import InternalBoard from './InternalBoard'
import InternalBoardCPU from './InternalBoardCPU'

export default function Playboard() {
  const scoreP1 = useStore((state) => state.scoreP1)
  const scoreP2 = useStore((state) => state.scoreP2)

  const { startCPU, setStartCPU } = useContext(StartCPUContext)

  console.log('Playboard re-rendered.')

  return (
    <div className='w-full font-bold xl:flex xl:items-center xl:justify-center xl:gap-[3.75rem]'>
      <ScoreboardPlayer score={scoreP1} player={'P1'} desktop={true} />
      {startCPU == false ? <InternalBoard /> : <InternalBoardCPU />}
      {!startCPU && <ScoreboardPlayer score={scoreP2} player={'P2'} desktop={true} />}
      {startCPU && <ScoreboardCPU score={scoreP2} desktop={true} />}
    </div>
  )
}
