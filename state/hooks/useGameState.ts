import { useState } from 'react';
import type { Player, Board, GamePhase, Winner } from '../../src/types/game';
import {
  checkWinner,
  isValidPlacingMove,
  executePlacingMove,
  createEmptyBoard,
  switchPlayer,
  shouldEnterMovingPhase
} from '../utils/gameLogic';

export default function useGameState() {
  // Game state
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [moveCount, setMoveCount] = useState(0);
  const [gamePhase, setGamePhase] = useState<GamePhase>('placing');
  const [winner, setWinner] = useState<Winner>(null);

  // Validate if a move is legal (using pure function)
  function isValidMove(row: number, col: number): boolean {
    // In placing phase: use gameLogic function
    if (gamePhase === 'placing') {
      return isValidPlacingMove(board, row, col);
    }
    
    // In moving phase: NO new pieces can be placed
    // Players can only move existing pieces
    return false;
  }

  // Handle clicking a square
  function clickSquare(row: number, col: number) {
    // Don't allow moves if game is over
    if (winner) return;
    
    // In moving phase: prevent any new piece placement
    if (gamePhase === 'moving') {
      // TODO: Implement piece selection and movement logic
      return;
    }
    
    // Don't allow invalid moves in placing phase
    if (!isValidMove(row, col)) return;

    // Create new board with the move using pure function (placing phase only)
    const newBoard = executePlacingMove(board, row, col, currentPlayer);

    // Update board
    setBoard(newBoard);
    
    // Increment move count
    const newMoveCount = moveCount + 1;
    setMoveCount(newMoveCount);

    // Check for winner using pure function
    const gameWinner = checkWinner(newBoard, gamePhase);
    if (gameWinner) {
      setWinner(gameWinner);
      return; // Game is over
    }

    // Switch to moving phase using pure function
    if (shouldEnterMovingPhase(newMoveCount, gameWinner)) {
      setGamePhase('moving');
    }

    // Switch players using pure function
    setCurrentPlayer(switchPlayer(currentPlayer));
  }

  // Reset the game to initial state
  function resetGame() {
    setBoard(createEmptyBoard());
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
    isValidMove
  };
}
