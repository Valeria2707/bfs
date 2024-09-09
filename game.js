import { board } from "./constants/board.constants.js";

export class Game {
  constructor(board) {
    this.board = board;
    this.rows = board.length;
    this.cols = board[0].length;
  }

  isValid(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  // BFS traversal
  bfs(row, col) {
    const target = this.board[row][col];

    const visited = new Set();

    // Direction vectors
    const rowNum = [-1, 0, 0, 1];
    const colNum = [0, -1, 1, 0];

    const queue = [];
    queue.push([row, col]);

    visited.add(`${row},${col}`);
    this.board[row][col] = " ";

    // While there are cells to process in the queue
    while (queue.length > 0) {
      const [currRow, currCol] = queue.shift();

      // Explore the 4 neighboring cells
      for (let i = 0; i < 4; i++) {
        const newRow = currRow + rowNum[i];
        const newCol = currCol + colNum[i];

        // Check if the new cell is valid and matches the target value
        if (
          this.isValid(newRow, newCol, visited) &&
          this.board[newRow][newCol] === target
        ) {
          visited.add(`${newRow},${newCol}`);
          queue.push([newRow, newCol]);

          this.board[newRow][newCol] = " ";
        }
      }
    }
  }

  printBoard() {
    console.log(this.board.map((row) => row.join(" ")).join("\n"));
  }
}
