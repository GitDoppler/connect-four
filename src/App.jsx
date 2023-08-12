import StartMenu from './components/StartMenu'
import { useState, createContext } from 'react'

export const StartPlayerContext = createContext({})

function App() {
    const [startPlayer, setStartPlayer] = useState(false)

    return (
        <StartPlayerContext.Provider value={{ startPlayer, setStartPlayer }}>
            <div className="min-h-screen bg-custom-purple font-[SpaceGrotesk]">
                <StartMenu />
            </div>
        </StartPlayerContext.Provider>
    )
}

export default App
