import { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Player1 from '../assets/images/player-one.svg'
import Player2 from '../assets/images/player-two.svg'
import WhiteBoardSmall from '../assets/images/board-layer-white-small.svg'
import BlackBoardSmall from '../assets/images/board-layer-black-small.svg'
import WhiteBoardLarge from '../assets/images/board-layer-white-large.svg'
import BlackBoardLarge from '../assets/images/board-layer-black-large.svg'
import RedCircle from '../assets/images/counter-red-large.svg'
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
        <div className="mx-auto w-[min(100%-40px,632px)] pt-12">
            <div className="flex items-center justify-between text-white">
                <button className="w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase">Menu</button>
                <img src={Logo} alt="Logo" className="h-[2.5rem] w-[2.5rem] md:h-[52px] md:w-[52px]" />
                <button className="w-28 rounded-2xl bg-custom-dark-purple py-2 font-bold uppercase">Restart</button>
            </div>

            <div className="flex justify-center gap-5 pt-12 font-bold">
                <div className="relative rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000]">
                    <div className="flex w-[clamp(8.88rem,calc(1.12rem+33.08vw),17.00rem)] flex-col items-center justify-center px-9 py-2 uppercase">
                        <div>Player 1</div>
                        <div className="text-3xl">{scoreP1}</div>
                    </div>
                    <img src={Player1} alt="Player 1" className="absolute left-[-1.6875rem] top-[10%] h-[3.6875rem] w-[3.375rem]" />
                </div>
                <div className="relative rounded-2xl border-4 border-black bg-white shadow-[0_10px_0_0_#000]">
                    <div className="flex w-[clamp(8.88rem,calc(1.12rem+33.08vw),17.00rem)] flex-col items-center justify-center px-9 py-2 uppercase">
                        <div>Player 2</div>
                        <div className="text-3xl">{scoreP1}</div>
                    </div>
                    <img src={Player2} alt="Player 2" className="absolute right-[-1.6875rem] top-[10%] h-[3.6875rem] w-[3.375rem]" />
                </div>
            </div>

            <div className="relative mx-auto mt-16 flex w-[clamp(20.94rem,calc(3.23rem+75.57vw),39.50rem)] flex-wrap justify-center gap-[clamp(0.81rem,calc(0.16rem+2.80vw),1.50rem)]">
                {matrix.map((row, indexRow) =>
                    row.map((e, indexCol) => (
                        <div
                            className="relative h-[clamp(2.13rem,calc(0.34rem+7.63vw),4.00rem)] w-[clamp(2.13rem,calc(0.34rem+7.63vw),4.00rem)] md:h-[64px] md:w-[64px]"
                            key={indexRow + '-' + indexCol}
                        >
                            <button
                                className=" relative z-30 h-full w-full rounded-full md:h-[64px] md:w-[64px]"
                                onClick={() => {
                                    console.log(indexRow + '-' + indexCol)
                                    updateMatrix(indexRow, indexCol, 1)
                                    console.log(matrix)
                                }}
                            ></button>

                            {matrix[indexRow][indexCol] === 1 ? (
                                <motion.img
                                    initial={{ top: '-3.125rem' }}
                                    animate={{ top: 'clamp(0.00rem, calc(-0.36rem + 1.53vw), 0.38rem)' }}
                                    src={RedCircle}
                                    className={'absolute z-10 aspect-square w-[calc(100%+8px)] max-w-none ' + `left-[${indexCol === 6 || indexCol === 5 ? '-4.5px' : '-3px'}]`}
                                />
                            ) : null}
                        </div>
                    ))
                )}
                <img src={WhiteBoardSmall} alt="" className="absolute left-[0] top-[-0.625rem] z-20 w-[clamp(20.94rem,calc(3.23rem+75.57vw),39.50rem)] md:hidden"></img>
                <img src={BlackBoardSmall} alt="" className="absolute left-0 top-[-0.625rem] z-0  w-[clamp(20.94rem,calc(3.23rem+75.57vw),39.50rem)] md:hidden"></img>
                <img src={WhiteBoardLarge} alt="" className="absolute left-0 top-[-20px] z-20 hidden md:block"></img>
                <img src={BlackBoardLarge} alt="" className="absolute left-0 top-[-20px] z-0 hidden md:block"></img>
            </div>
        </div>
    )
}
