import { useState } from 'react';

// Types for our game
type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[][];
type GamePhase = 'placing' | 'moving';
type Winner = Player | 'tie' | null;

export default function useGameState() {
  // Game state
  const [board, setBoard] = useState<Board>([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [moveCount, setMoveCount] = useState(0);
  const [gamePhase, setGamePhase] = useState<GamePhase>('placing');
  const [winner, setWinner] = useState<Winner>(null);

  // Check for winner after each move
  function checkWinner(board: Board): Winner {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return board[row][0];
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[0][col] && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return board[0][col];
      }
    }

    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }

    // Check for tie (board full but no winner)
    const isFull = board.every(row => row.every(cell => cell !== null));
    if (isFull && gamePhase === 'placing') {
      return 'tie';
    }

    return null; // No winner yet
  }

  // Validate if a move is legal
  function isValidMove(row: number, col: number): boolean {
    // In placing phase: square must be empty
    if (gamePhase === 'placing') {
      return board[row][col] === null;
    }
    
    // In moving phase: more complex logic (for later)
    // For now, just check if square is empty
    return board[row][col] === null;
  }

  // Handle clicking a square
  function clickSquare(row: number, col: number) {
    // Don't allow moves if game is over
    if (winner) return;
    
    // Don't allow invalid moves
    if (!isValidMove(row, col)) return;

    // Create new board with the move
    const newBoard = [...board];
    newBoard[row] = [...board[row]];
    newBoard[row][col] = currentPlayer;

    // Update board
    setBoard(newBoard);
    
    // Increment move count
    const newMoveCount = moveCount + 1;
    setMoveCount(newMoveCount);

    // Check for winner
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return; // Game is over
    }

    // Switch to moving phase after 8 moves (and no winner)
    if (newMoveCount >= 8 && gamePhase === 'placing') {
      setGamePhase('moving');
    }

    // Switch players
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  // Reset the game to initial state
  function resetGame() {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setCurrentPlayer('X');
    setMoveCount(0);
    setGamePhase('placing');
    setWinner(null);
  }

  // Start a new game (same as reset for now)
  function newGame() {
    resetGame();
  }

  // Return all state and functions
  return {
    // State
    board,
    currentPlayer,
    moveCount,
    gamePhase,
    winner,
    
    // Actions
    clickSquare,
    resetGame,
    newGame,
    
    // Helper functions (for future use)
    checkWinner,
    isValidMove
  };
}
