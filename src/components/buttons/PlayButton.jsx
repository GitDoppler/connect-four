import startIcon from '../../assets/images/player-vs-player.svg'
import { useContext } from 'react'
import { StartPlayerContext } from '../../App'

export default function PlayButton() {
    const { startPlayer, setStartPlayer } = useContext(StartPlayerContext)

    console.log(startPlayer)

    return (
        <button
            onClick={() => {
                setStartPlayer(!startPlayer)
            }}
            className="w-full rounded-2xl border-4 border-black bg-custom-yellow shadow-[0_10px_0_0_#000]"
        >
            <div className="m-5 flex items-center justify-between">
                <div className=" font-[SpaceGrotesk] text-2xl font-bold uppercase">Play vs player</div>
                <img src={startIcon}></img>
            </div>
        </button>
    )
}
