export function createMatrix(rows, cols) {
    const matrix = []

    for (let i = 0; i < rows; i++) {
      const row = new Array(cols).fill(0)
      matrix.push(row)
    }

    return matrix
}

export function validateMove(row, col,matrix) {
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

export function checkWin(matrix){
    for(let i=5;i>=0;i--){
        for(let j=0;j<7;j++){
            if(matrix[i][j]==0){
                continue
            }
            //horizontal right
            if(j<=3 && matrix[i][j]==matrix[i][j+1] && matrix[i][j+1]==matrix[i][j+2] && matrix[i][j+2]==matrix[i][j+3]){
                return true
            }
            //horizontal left
            if(j>=3 && matrix[i][j]==matrix[i][j-1] && matrix[i][j-1]==matrix[i][j-2] && matrix[i][j-2]==matrix[i][j-3]){
                return true
            }
            //verticalt
            if(i>=3 && matrix[i][j]==matrix[i-1][j] && matrix[i-1][j]==matrix[i-2][j] && matrix[i-2][j]==matrix[i-3][j]){
                return true
            }
            //diagonal right
            if(i>=3 && j<=3 && matrix[i][j]==matrix[i-1][j+1] && matrix[i-1][j+1]==matrix[i-2][j+2] && matrix[i-2][j+2]==matrix[i-3][j+3]){
                return true
            }
            //diagonal left
            if(i>=3 && j>=3 && matrix[i][j]==matrix[i-1][j-1] && matrix[i-1][j-1]==matrix[i-2][j-2] && matrix[i-2][j-2]==matrix[i-3][j-3]){
                return true
            }
        }
    }
    return false
}