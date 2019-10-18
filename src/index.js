module.exports = function solveSudonumberu(matrix) {
  let sudoku = matrix;

  for (let row = 0; row <= 8; row += 1) {
    for (let column = 0; column <= 8; column += 1) {
      if (sudoku[row][column] === 0) {
        for (let num = 1; num <= 9; num += 1) {
          if (numberСheck(sudoku, row, column, num)) {
            sudoku[row][column] = num;
            if (solveSudonumberu(sudoku)) {
              return sudoku;
            }
            sudoku[row][column] = 0;
          }
        }
        return false;
      }
    }
  }
  return sudoku;
}

const numberСheck = (sudoku, row, column, num) => {
  if (sudoku[row].includes(num)) {
    return false;
  }

  for (let i = 0; i <= 8; i += 1) {
    if (sudoku[i][column] === num) {
      return false;
    }
  }

  const thirdRow = Math.floor(row / 3) * 3;
  const thirdColumn = Math.floor(column / 3) * 3;
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (sudoku[thirdRow + i][thirdColumn + j] === num) {
        return false;
      }
    }
  }
  return true;
}
