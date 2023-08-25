import startIcon from '../../assets/images/player-vs-cpu.svg'
import { useContext } from 'react'
import { StartCPUContext } from '../../App'

export default function CPUButton() {
    const { startCPU, setStartCPU } = useContext(StartCPUContext)

    return (
        <button
            onClick={() => {
                setStartCPU(!startCPU)
            }}
            className="w-full rounded-2xl border-4 border-black bg-custom-pink shadow-[0_10px_0_0_#000] hover:border-custom-dark-purple hover:shadow-[0_10px_0_0_#5C2DD5]"
            aria-label="Play against CPU"
        >
            <div className="m-5 flex items-center justify-between">
                <div className=" font-[SpaceGrotesk] text-2xl font-bold uppercase">Play vs CPU</div>
                <img src={startIcon} className="h-[2.875rem] w-[5.375rem]" alt="Play against CPU"></img>
            </div>
        </button>
    )
}
