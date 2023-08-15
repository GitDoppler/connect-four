import closeIcon from '../../src/assets/images/icon-check.svg'
import { useContext } from 'react'
import { RulesContext } from '../App'
import { motion } from 'framer-motion'

export default function Rules() {
    const { rules, setRules } = useContext(RulesContext)

    //The extra div acts as a container for the rules since the div breaks with margin and looks bad with padding.
    return (
        <div className="pt-[20vh]">
            <motion.div key="rules" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="mx-auto w-[min(100%-40px,480px)] rounded-[40px] border-4 border-black bg-white shadow-[0_10px_0_0_#000]">
                <div className=" relative px-10 pb-14 pt-7">
                    <h1 className="mb-7 text-center text-6xl font-bold uppercase">Rules</h1>
                    <h2 className="mb-4 text-xl uppercase text-custom-purple">Objective</h2>
                    <p className="mb-8 text-base">Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
                    <h2 className="mb-4 text-xl uppercase text-custom-purple">How to play</h2>
                    <ol className="list-decimal pl-4 text-base">
                        <li className="pl-2">Red goes first in the first game.</li>
                        <li className="pl-2">Players must alternate turns, and only one disc can be dropped in each turn. </li>
                        <li className="pl-2">The game ends when there is a 4-in-a-row or a stalemate.</li>
                        <li className="pl-2">The starter of the previous game goes second on the next game.</li>
                    </ol>
                    <button
                        onClick={() => {
                            setRules(!rules)
                        }}
                        className="absolute bottom-[-40px] left-[calc(50%-35px)]"
                    >
                        <img src={closeIcon} />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
