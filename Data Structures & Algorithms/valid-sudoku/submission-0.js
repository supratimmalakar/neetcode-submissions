class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let gridMap = {}
        for (let i = 0; i <9; i++) {
            let rowMap = {}
            let columnMap = {}
            for (let j = 0; j < 9; j++) {
                console.log(gridMap)
                if (board[i][j] !== ".") {
                    const gridI = Math.floor(i/3)
                    const gridJ = Math.floor(j/3)
                    const gridKey = `${gridI},${gridJ}`;
                    rowMap[board[i][j]] = (rowMap[board[i][j]] || 0) + 1;
                    if (rowMap[board[i][j]] > 1) return false;
                    if (gridMap[gridKey] === undefined) {
                        gridMap[gridKey] = {}
                    }
                    gridMap[gridKey][board[i][j]] = (gridMap[gridKey][board[i][j]] || 0) + 1;
                    if (gridMap[gridKey][board[i][j]] > 1) return false 
                }
                if (board[j][i] !== ".") {
                    columnMap[board[j][i]] = (columnMap[board[j][i]] || 0) + 1;
                    if (columnMap[board[j][i]] > 1) return false
                }
            }
        }
        return true
    }
}
