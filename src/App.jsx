import StartMenu from './components/StartMenu'
import { useState, createContext, useRef } from 'react'

export const StartPlayerContext = createContext({})
export const TurnContext = createContext({})

function App() {
    const [startPlayer, setStartPlayer] = useState(false)
    const [turn, setTurn] = useState('P1')
    const paused = useRef(false)

    return (
        <StartPlayerContext.Provider value={{ startPlayer, setStartPlayer }}>
            <TurnContext.Provider value={{ turn, setTurn }}>
                <div className="min-h-screen bg-custom-purple font-[SpaceGrotesk]">
                    <StartMenu />
                </div>
            </TurnContext.Provider>
        </StartPlayerContext.Provider>
    )
}

export default App
