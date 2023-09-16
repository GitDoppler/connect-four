const ROWS = 6;
const COLS = 7;
const EMPTY = 0;
const PLAYER = 1;
const CPU = -1;
const MAX_DEPTH = 4;  // Depth to which the minimax algorithm will search

function hasFourInARow(board, player) {
    // Check rows, columns and diagonals for 4 in a row
    // Rows
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS - 3; col++) {
            if (board[row][col] === player && board[row][col + 1] === player &&
                board[row][col + 2] === player && board[row][col + 3] === player) {
                return true;
            }
        }
    }

    // Columns
    for (let col = 0; col < COLS; col++) {
        for (let row = 0; row < ROWS - 3; row++) {
            if (board[row][col] === player && board[row + 1][col] === player &&
                board[row + 2][col] === player && board[row + 3][col] === player) {
                return true;
            }
        }
    }

    // Diagonals (from top-left to bottom-right)
    for (let row = 0; row < ROWS - 3; row++) {
        for (let col = 0; col < COLS - 3; col++) {
            if (board[row][col] === player && board[row + 1][col + 1] === player &&
                board[row + 2][col + 2] === player && board[row + 3][col + 3] === player) {
                return true;
            }
        }
    }

    // Diagonals (from top-right to bottom-left)
    for (let row = 0; row < ROWS - 3; row++) {
        for (let col = 3; col < COLS; col++) {
            if (board[row][col] === player && board[row + 1][col - 1] === player &&
                board[row + 2][col - 2] === player && board[row + 3][col - 3] === player) {
                return true;
            }
        }
    }

    return false;
}

function evaluate(board) {
    if (hasFourInARow(board, CPU)) return Infinity;
    if (hasFourInARow(board, PLAYER)) return -Infinity;
    return 0;
}

function makeMove(board, col, player) {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row][col] === EMPTY) {
            board[row][col] = player;
            return row;
        }
    }
    return -1;
}

function undoMove(board, col) {
    for (let row = 0; row < ROWS; row++) {
        if (board[row][col] !== EMPTY) {
            board[row][col] = EMPTY;
            return;
        }
    }
}

function minimax(board, depth, isMaximizing, alpha, beta) {
    let score = evaluate(board);

    if (score === Infinity) return score;
    if (score === -Infinity) return score;
    if (depth === MAX_DEPTH) return score;

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let col = 0; col < COLS; col++) {
            if (board[0][col] === EMPTY) {
                // Make the move on board for CPU
                makeMove(board, col, CPU);
                
                let evaluate = minimax(board, depth + 1, false, alpha, beta);
                
                // Undo the move
                undoMove(board, col);

                maxEval = Math.max(maxEval, evaluate);
                alpha = Math.max(alpha, evaluate);
                if (beta <= alpha) break;
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let col = 0; col < COLS; col++) {
            if (board[0][col] === EMPTY) {
                // Make the move on board for player
                makeMove(board, col, PLAYER);
                
                let evaluate = minimax(board, depth + 1, true, alpha, beta);
                
                // Undo the move
                undoMove(board, col);

                minEval = Math.min(minEval, evaluate);
                beta = Math.min(beta, evaluate);
                if (beta <= alpha) break;
            }
        }
        return minEval;
    }
}

function isImminentThreat(board, col, player) {
    // Make a temporary move
    let rowInserted = makeMove(board, col, player);
    if (rowInserted === -1) {
        return false;
    }
    let isThreat = hasFourInARow(board, player);
    undoMove(board, col);
    return isThreat;
}


function getBestMove(board) {
    for (let col = 0; col < COLS; col++) {
        if (isImminentThreat(board, col, PLAYER)) {
            for (let row = ROWS - 1; row >= 0; row--) {
                if (board[row][col] === EMPTY) {
                    return { col: col, row: row };
                }
            }
        }
    }
    
    let bestMove = {
        col: -1,
        row: -1
    };
    let bestValue = -Infinity;

    for (let col = 0; col < COLS; col++) {
        if (board[0][col] === EMPTY) {
            // Make the move on board for CPU and get the row where the puck landed
            let rowInserted = makeMove(board, col, CPU);
            
            let moveValue = minimax(board, 1, false, -Infinity, Infinity);
            
            // Undo the move to backtrack
            undoMove(board, col);

            if (moveValue > bestValue) {
                bestValue = moveValue;
                bestMove.col = col;
                bestMove.row = rowInserted;
            }
        }
    }

    // Ensure that we return a valid move if available
    if (bestMove.col === -1) {
        for (let col = 0; col < COLS; col++) {
            if (board[0][col] === EMPTY) {
                bestMove.col = col;
                for (let row = ROWS - 1; row >= 0; row--) {
                    if (board[row][col] === EMPTY) {
                        bestMove.row = row;
                        break;
                    }
                }
                break;
            }
        }
    }

    return bestMove;
}


export function getUpdatedMatrixCPU(board){
    const updatedMatrix = board.map((row) => [...row]);
    console.log(updatedMatrix)
    const bestMove = getBestMove(board);
    console.log(bestMove)
    updatedMatrix[bestMove.row][bestMove.col] = -1;
    return updatedMatrix;
}
