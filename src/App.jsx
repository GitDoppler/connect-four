import { AnimatePresence } from 'framer-motion'
import Rules from './components/Rules'
import StartMenu from './components/StartMenu'
import { useState, createContext } from 'react'
import Board from './components/Board'

export const StartPlayerContext = createContext({})
export const StartCPUContext = createContext({})
export const RulesContext = createContext({})

function App() {
  const [startPlayer, setStartPlayer] = useState(false)
  const [startCPU, setStartCPU] = useState(false)
  const [rules, setRules] = useState(false)

  return (
    <StartPlayerContext.Provider value={{ startPlayer, setStartPlayer }}>
      <StartCPUContext.Provider value={{ startCPU, setStartCPU }}>
        <RulesContext.Provider value={{ rules, setRules }}>
          <div
            className={`min-h-screen font-[SpaceGrotesk] ${
              startPlayer === true || startCPU === true ? 'bg-custom-purple' : ''
            }`}
          >
            <AnimatePresence mode='wait' initial={false}>
              {!rules && !startPlayer && !startCPU && <StartMenu />}
              {rules && <Rules />}
              {(startPlayer || startCPU) && <Board />}
            </AnimatePresence>
          </div>
        </RulesContext.Provider>
      </StartCPUContext.Provider>
    </StartPlayerContext.Provider>
  )
}

export default App
