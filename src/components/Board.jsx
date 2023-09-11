import { useState } from 'react'
import Counter from './Counter'
import Navbar from './Navbar'
import Scoreboard from './Scoreboard'
import Playboard from './Playboard'

export default function Board() {
  const scoreP1 = 12
  const [turnEnd, setTurnEnd] = useState(false)

  return (
    <div className='flex min-h-screen flex-col justify-start'>
      <div className='mx-auto  w-[min(100%-40px,632px)] pt-12 xl:w-[64.625rem]'>
        <Navbar />
        <Scoreboard score={scoreP1} />
        <Playboard score={scoreP1} turnEnd={turnEnd} setTurnEnd={setTurnEnd} />
      </div>
      <Counter turnEnd={turnEnd} setTurnEnd={setTurnEnd} />
    </div>
  )
}
