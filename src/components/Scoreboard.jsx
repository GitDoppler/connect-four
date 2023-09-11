import ScoreboardPlayer from './ScoreboardPlayer'

export default function Scoreboard({ score }) {
  return (
    <div className='flex justify-center gap-5 pt-12 font-bold xl:hidden'>
      <ScoreboardPlayer score={score} player={'P1'} desktop={false} />
      <ScoreboardPlayer score={score} player={'P2'} desktop={false} />
    </div>
  )
}
