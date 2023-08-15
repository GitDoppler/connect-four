import PlayButton from './buttons/PlayButton'
import CPUButton from './buttons/CPUButton'
import RulesButton from './buttons/RulesButton'
import logo from '../../src/assets/images/logo.svg'
import { motion } from 'framer-motion'

export default function StartMenu() {
    return (
        <motion.div key="menu" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="mx-auto w-[min(100%-40px,480px)] pt-[20vh]">
            <div className="flex flex-col items-center gap-7 md:rounded-[2.5rem] md:border-4 md:border-black md:bg-custom-purple md:px-10 md:pb-14 md:pt-16 md:shadow-[0_10px_0_0_#000]">
                <img src={logo} alt="Logo" className="h-[4rem] w-[4rem]" />
                <PlayButton />
                <CPUButton />
                <RulesButton />
            </div>
        </motion.div>
    )
}
