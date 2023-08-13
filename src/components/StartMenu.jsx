import PlayButton from './buttons/PlayButton'
import CPUButton from './buttons/CPUButton'
import RulesButton from './buttons/RulesButton'

export default function StartMenu() {
    return (
        <div className="mx-auto flex w-[min(100%-40px,768px)] flex-col gap-5 py-4">
            <PlayButton />
            <CPUButton />
            <RulesButton />
        </div>
    )
}
