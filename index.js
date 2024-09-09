import { board } from "./constants/board.constants.js";
import { Game } from "./game.js";

const game = new Game(board);

console.log("Initial data:");
game.printBoard();

game.bfs(0, 4);

console.log("\nData with removed letters:");
game.printBoard();
