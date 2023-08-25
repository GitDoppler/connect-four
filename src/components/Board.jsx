import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Player1 from '../assets/images/player-one.svg'
import Player2 from '../assets/images/player-two.svg'
import WhiteBoardSmall from '../assets/images/board-layer-white-small.svg'
import BlackBoardBlack from '../assets/images/board-layer-black-small.svg'
import RedCircle from '../assets/images/counter-red-small.svg'
import { motion } from 'framer-motion'

export default function Board() {
    const scoreP1 = 12

    const [matrix, setMatrix] = useState(createMatrix(6, 7))

    function createMatrix(rows, cols) {
        const matrix = []

        for (let i = 0; i < rows; i++) {
            const row = new Array(cols).fill(0)
            matrix.push(row)
        }

        return matrix
    }

    function updateMatrix(row, col, newValue) {
        const updatedMatrix = [...matrix]
        updatedMatrix[row][col] = newValue
        setMatrix(updatedMatrix)
    }

    return (
        <div className="mx-auto w-[min(100%-40px,480px)] pt-12">
            <div className="flex items-center justify-between text-white">
                <button className="w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase">Menu</button>
                <img src={Logo} alt="Logo" className="h-[2.5rem] w-[2.5rem]" />
                <button className="w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase">Restart</button>
            </div>

            <div className="flex justify-center  gap-5 pt-12 font-bold">
                <div className="relative rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000]">
                    <div className="flex flex-col items-center justify-center px-9 py-2 uppercase">
                        <div>Player 1</div>
                        <div className="text-3xl">{scoreP1}</div>
                    </div>
                    <img src={Player1} alt="Player 1" className="absolute left-[-1.6875rem] top-[10%] h-[3.6875rem] w-[3.375rem]" />
                </div>
                <div className="relative rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000]">
                    <div className="flex flex-col items-center justify-center px-9 py-2 uppercase">
                        <div>Player 2</div>
                        <div className="text-3xl">{scoreP1}</div>
                    </div>
                    <img src={Player2} alt="Player 2" className="absolute right-[-1.6875rem] top-[10%] h-[3.6875rem] w-[3.375rem]" />
                </div>
            </div>

            <div className="relative mx-auto mt-16 flex w-[20.9375rem] flex-wrap justify-center gap-x-[0.79625rem] gap-y-[0.8125rem]">
                {matrix.map((row, indexRow) =>
                    row.map((e, indexCol) => (
                        <div className="relative h-[2.125rem] w-[2.125rem]" key={indexRow + '-' + indexCol}>
                            <button
                                className=" relative z-30 h-[2.125rem] w-[2.125rem] rounded-full"
                                onClick={() => {
                                    console.log(indexRow + '-' + indexCol)
                                    updateMatrix(indexRow, indexCol, 1)
                                    console.log(matrix)
                                }}
                            ></button>

                            {matrix[indexRow][indexCol] === 1 ? <motion.img initial={{ top: '-3.125rem' }} animate={{ top: '0px' }} src={RedCircle} className="absolute z-10" /> : null}
                        </div>
                    ))
                )}
                <img src={WhiteBoardSmall} alt="" className="absolute left-0 top-[-10px] z-20"></img>
                <img src={BlackBoardBlack} alt="" className="absolute left-0 top-[-10px] z-0"></img>
            </div>
        </div>
    )
}
