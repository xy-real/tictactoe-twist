// Pure helper functions for tic-tac-toe game rules
import type { 
  Player, 
  Board, 
  GamePhase, 
  Winner, 
  Position 
} from '../../src/types/game';

/**
 * Check if there's a winner on the board
 * Returns the winning player, 'tie', or null
 */
export function checkWinner(board: Board, gamePhase: GamePhase = 'placing'): Winner {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (board[row][0] && 
        board[row][0] === board[row][1] && 
        board[row][1] === board[row][2]) {
      return board[row][0];
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (board[0][col] && 
        board[0][col] === board[1][col] && 
        board[1][col] === board[2][col]) {
      return board[0][col];
    }
  }

  // Check diagonal (top-left to bottom-right)
  if (board[0][0] && 
      board[0][0] === board[1][1] && 
      board[1][1] === board[2][2]) {
    return board[0][0];
  }

  // Check diagonal (top-right to bottom-left)
  if (board[0][2] && 
      board[0][2] === board[1][1] && 
      board[1][1] === board[2][0]) {
    return board[0][2];
  }

  // Check for tie (only in placing phase when board is full)
  if (gamePhase === 'placing' && isBoardFull(board)) {
    return 'tie';
  }

  return null; // No winner yet
}

/**
 * Check if the board is completely filled
 */
export function isBoardFull(board: Board): boolean {
  return board.every(row => row.every(cell => cell !== null));
}

/**
 * Check if a position is valid (within board bounds)
 */
export function isValidPosition(row: number, col: number): boolean {
  return row >= 0 && row < 3 && col >= 0 && col < 3;
}

/**
 * Check if a square is empty
 */
export function isEmpty(board: Board, row: number, col: number): boolean {
  if (!isValidPosition(row, col)) return false;
  return board[row][col] === null;
}

/**
 * Check if a move is valid in placing phase
 */
export function isValidPlacingMove(board: Board, row: number, col: number): boolean {
  return isValidPosition(row, col) && isEmpty(board, row, col);
}

/**
 * Check if a square contains the current player's piece
 */
export function isPlayerPiece(board: Board, row: number, col: number, player: Player): boolean {
  if (!isValidPosition(row, col)) return false;
  return board[row][col] === player;
}

/**
 * Get all positions of a player's pieces
 */
export function getPlayerPositions(board: Board, player: Player): Position[] {
  const positions: Position[] = [];
  
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === player) {
        positions.push({ row, col });
      }
    }
  }
  
  return positions;
}

/**
 * Check if two positions are adjacent (for moving phase)
 */
export function areAdjacent(from: Position, to: Position): boolean {
  const rowDiff = Math.abs(from.row - to.row);
  const colDiff = Math.abs(from.col - to.col);
  
  // Adjacent means exactly one step away (horizontally, vertically, or diagonally)
  return (rowDiff <= 1 && colDiff <= 1) && (rowDiff + colDiff > 0);
}

/**
 * Get all valid adjacent positions for a piece (for moving phase)
 */
export function getAdjacentPositions(board: Board, row: number, col: number): Position[] {
  const adjacent: Position[] = [];
  
  // Check all 8 surrounding positions
  for (let deltaRow = -1; deltaRow <= 1; deltaRow++) {
    for (let deltaCol = -1; deltaCol <= 1; deltaCol++) {
      // Skip the current position
      if (deltaRow === 0 && deltaCol === 0) continue;
      
      const newRow = row + deltaRow;
      const newCol = col + deltaCol;
      
      // Check if position is valid and empty
      if (isValidPosition(newRow, newCol) && isEmpty(board, newRow, newCol)) {
        adjacent.push({ row: newRow, col: newCol });
      }
    }
  }
  
  return adjacent;
}

/**
 * Check if a move is valid in moving phase
 * Player must move their own piece to an adjacent empty square
 */
export function isValidMovingMove(
  board: Board, 
  fromRow: number, 
  fromCol: number, 
  toRow: number, 
  toCol: number, 
  player: Player
): boolean {
  // Check if source position has the player's piece
  if (!isPlayerPiece(board, fromRow, fromCol, player)) {
    return false;
  }
  
  // Check if destination is empty
  if (!isEmpty(board, toRow, toCol)) {
    return false;
  }
  
  // Check if positions are adjacent
  return areAdjacent({ row: fromRow, col: fromCol }, { row: toRow, col: toCol });
}

/**
 * Execute a placing move - returns new board state
 */
export function executePlacingMove(board: Board, row: number, col: number, player: Player): Board {
  if (!isValidPlacingMove(board, row, col)) {
    throw new Error('Invalid placing move');
  }
  
  const newBoard = board.map(row => [...row]);
  newBoard[row][col] = player;
  return newBoard;
}

/**
 * Execute a moving move - returns new board state
 */
export function executeMovingMove(
  board: Board, 
  fromRow: number, 
  fromCol: number, 
  toRow: number, 
  toCol: number, 
  player: Player
): Board {
  if (!isValidMovingMove(board, fromRow, fromCol, toRow, toCol, player)) {
    throw new Error('Invalid moving move');
  }
  
  const newBoard = board.map(row => [...row]);
  newBoard[fromRow][fromCol] = null; // Remove piece from source
  newBoard[toRow][toCol] = player;   // Place piece at destination
  return newBoard;
}

/**
 * Create an empty 3x3 board
 */
export function createEmptyBoard(): Board {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
}

/**
 * Count total pieces on the board
 */
export function countPieces(board: Board): number {
  let count = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] !== null) {
        count++;
      }
    }
  }
  return count;
}

/**
 * Count pieces for a specific player
 */
export function countPlayerPieces(board: Board, player: Player): number {
  let count = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === player) {
        count++;
      }
    }
  }
  return count;
}

/**
 * Switch to the other player
 */
export function switchPlayer(currentPlayer: Player): Player {
  return currentPlayer === 'X' ? 'O' : 'X';
}

/**
 * Determine if game should switch to moving phase
 */
export function shouldEnterMovingPhase(moveCount: number, winner: Winner): boolean {
  return moveCount >= 8 && winner === null;
}
