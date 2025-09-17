import { useState } from 'react';
import type { Player, Board, GamePhase, Winner } from '../../src/types/game';
import {
  checkWinner,
  isValidPlacingMove,
  isPlayerPiece,
  isValidMovingMove,
  executeMovingMove,
  executePlacingMove,
  createEmptyBoard,
  switchPlayer,
  shouldEnterMovingPhase,
  getAdjacentPositions
} from '../utils/gameLogic';

export default function useGameState() {
  // Game state
  const [board, setBoard] = useState<Board>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [moveCount, setMoveCount] = useState(0);
  const [gamePhase, setGamePhase] = useState<GamePhase>('placing');
  const [winner, setWinner] = useState<Winner>(null);
  const [selectedPiece, setSelectedPiece] = useState<{row: number, col: number} | null>(null);

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

  // Get valid destinations for selected piece (for highlighting)
  function getValidDestinations(): {row: number, col: number}[] {
    if (gamePhase !== 'moving' || !selectedPiece) return [];
    return getAdjacentPositions(board, selectedPiece.row, selectedPiece.col);
  }

  // Check if a square should be highlighted as a valid destination
  function isValidDestination(row: number, col: number): boolean {
    if (gamePhase !== 'moving' || !selectedPiece) return false;
    const validDests = getValidDestinations();
    return validDests.some(dest => dest.row === row && dest.col === col);
  }

  // Check if a square is the currently selected piece
  function isSelected(row: number, col: number): boolean {
    return selectedPiece !== null && selectedPiece.row === row && selectedPiece.col === col;
  }

  // Handle clicking a square
  function clickSquare(row: number, col: number) {
    // Don't allow moves if game is over
    if (winner) return;
    
    // In moving phase: handle piece selection and movement
    if (gamePhase === 'moving') {
      // If no piece is selected, try to select a piece
      if (selectedPiece === null) {
        // Check if clicked square has current player's piece
        if (isPlayerPiece(board, row, col, currentPlayer)) {
          setSelectedPiece({ row, col });
        }
        return;
      }
      
      // If a piece is already selected
      if (selectedPiece) {
        // If clicking the same piece, deselect it
        if (selectedPiece.row === row && selectedPiece.col === col) {
          setSelectedPiece(null);
          return;
        }
        
        // Try to move the selected piece to the clicked position
        if (isValidMovingMove(board, selectedPiece.row, selectedPiece.col, row, col, currentPlayer)) {
          // Execute the move
          const newBoard = executeMovingMove(board, selectedPiece.row, selectedPiece.col, row, col, currentPlayer);
          setBoard(newBoard);
          
          // Clear selection
          setSelectedPiece(null);
          
          // Check for winner after move
          const gameWinner = checkWinner(newBoard, gamePhase);
          if (gameWinner) {
            setWinner(gameWinner);
            return;
          }
          
          // Switch players
          setCurrentPlayer(switchPlayer(currentPlayer));
        } else {
          // Invalid move - check if clicking another piece of the same player
          if (isPlayerPiece(board, row, col, currentPlayer)) {
            setSelectedPiece({ row, col });
          } else {
            // Invalid move to empty/opponent square - deselect
            setSelectedPiece(null);
          }
        }
      }
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
    setSelectedPiece(null);
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
    selectedPiece,
    
    // Actions
    clickSquare,
    resetGame,
    newGame,
    
    // Helper functions
    isValidMove,
    isSelected,
    isValidDestination,
    getValidDestinations
  };
}
