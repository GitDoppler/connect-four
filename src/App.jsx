import Rules from './components/Rules'
import StartMenu from './components/StartMenu'
import { useState, createContext, useRef } from 'react'

export const StartPlayerContext = createContext({})
export const TurnContext = createContext({})
export const StartCPUContext = createContext({})
export const RulesContext = createContext({})

function App() {
    const [startPlayer, setStartPlayer] = useState(false)
    const [startCPU, setStartCPU] = useState(false)
    const [rules, setRules] = useState(false)
    const [turn, setTurn] = useState('P1')
    const paused = useRef(false)

    return (
        <StartPlayerContext.Provider value={{ startPlayer, setStartPlayer }}>
            <StartCPUContext.Provider value={{ startCPU, setStartCPU }}>
                <RulesContext.Provider value={{ rules, setRules }}>
                    <TurnContext.Provider value={{ turn, setTurn }}>
                        <div className="min-h-screen  font-[SpaceGrotesk] ">
                            {!rules && <StartMenu />}
                            {rules && <Rules />}
                        </div>
                    </TurnContext.Provider>
                </RulesContext.Provider>
            </StartCPUContext.Provider>
        </StartPlayerContext.Provider>
    )
}

export default App
