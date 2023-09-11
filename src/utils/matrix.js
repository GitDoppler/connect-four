export function createMatrix(rows, cols) {
    const matrix = []

    for (let i = 0; i < rows; i++) {
      const row = new Array(cols).fill(0)
      matrix.push(row)
    }

    return matrix
}

export function validateMove(row, col,matrix) {
    console.log("test")
    if (matrix[row][col] === -1 || matrix[row][col] === 1) return false

    if (row === 5) return true

    if (matrix[row + 1][col] != 0) return true
    
    return false
}

export function updateMatrix(row, col, newValue, matrix) {
    if (validateMove(row, col,matrix) === false) return null

    const updatedMatrix = matrix.map(row=>[...row])
    updatedMatrix[row][col] = newValue
    return updatedMatrix
}

export function checkWin(){

}