import { useEffect, useState, useRef, forwardRef, useContext } from 'react'
import { TurnContext } from '../App'

const Counter = forwardRef(function Counter(props, paused) {
    const [time, setTime] = useState(15)
    const { turn, setTurn } = useContext(TurnContext)
    const hasSwitchedTurn = useRef(false) // Ref to track if the turn has been switched for the current timer cycle

    useEffect(() => {
        const interval = setInterval(() => {
            if (paused.current === false) {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        if (!hasSwitchedTurn.current) {
                            setTurn((currentTurn) => (currentTurn === 'P1' ? 'P2' : 'P1'))
                            hasSwitchedTurn.current = true // Mark that the turn has been switched
                        }
                        return 15
                    }
                    hasSwitchedTurn.current = false // Reset the flag for the next timer cycle
                    return prevTime - 1
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    console.log(turn)

    return (
        <div className={'mt-11 flex h-[150px] max-w-[191px] flex-col items-center justify-center gap-1 rounded-2xl  bg-cover bg-no-repeat shadow-[0_10px_0_0_#000]' + ` bg-[url(../../src/assets/images/turn-background-${turn === 'P1' ? 'red' : 'yellow'}.svg)]`}>
            <div className=" text-base font-bold text-white">{`Player ${turn === 'P1' ? '1' : '2'}'s turn`}</div>
            <div className=" text-6xl font-bold text-white">{time + 's'}</div>
        </div>
    )
})

export default Counter
