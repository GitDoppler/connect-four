import { useEffect, useState } from 'react'

export default function Counter() {
    const [timeP1, setTimeP1] = useState(15)
    const [timeP2, setTimeP2] = useState(15)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeP1((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(interval) // Stop the timer when it reaches 0
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(interval) // Cleanup: clear the interval when the component is unmounted
    }, [])

    return (
        <div className="mt-11 flex h-[150px] max-w-[191px] flex-col items-center justify-center gap-1 rounded-2xl bg-[url(../../src/assets/images/turn-background-red.svg)] bg-cover bg-no-repeat shadow-[0_10px_0_0_#000]">
            <div className=" text-base font-bold text-white">Player 1's turn</div>
            <div className=" text-6xl font-bold text-white">{timeP1}</div>
        </div>
    )
}
