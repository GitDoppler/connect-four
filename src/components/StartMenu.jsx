import PlayButton from './buttons/PlayButton'
import Counter from './Counter'
import PauseButton from './buttons/PauseButton'

export default function StartMenu() {
    return (
        <div className="mx-auto w-[min(100%-40px,768px)] py-4">
            <PlayButton />
        </div>
    )
}
