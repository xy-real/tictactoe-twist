
/**
 * Represents a player in the game
 */
export type Player = 'X' | 'O';

/**
 * Represents a single cell on the board
 * Can be empty (null) or contain a player's piece
 */
export type Cell = Player | null;

/**
 * Represents the 3x3 game board
 */
export type Board = Cell[][];

/**
 * Represents the current phase of the game
 * - placing: Players take turns placing pieces on empty squares
 * - moving: Players can move their existing pieces to adjacent squares
 */
export type GamePhase = 'placing' | 'moving';

/**
 * Represents the game outcome
 * - Player: That player has won
 * - 'tie': Game ended in a tie
 * - null: Game is still in progress
 */
export type Winner = Player | 'tie' | null;

/**
 * Represents a position on the board
 */
export type Position = {
  row: number;
  col: number;
};

/**
 * Represents a move in the placing phase
 */
export type PlacingMove = {
  type: 'placing';
  position: Position;
  player: Player;
};

/**
 * Represents a move in the moving phase
 */
export type MovingMove = {
  type: 'moving';
  from: Position;
  to: Position;
  player: Player;
};

/**
 * Union type for all possible moves
 */
export type Move = PlacingMove | MovingMove;

/**
 * Game state interface
 */
export interface GameState {
  board: Board;
  currentPlayer: Player;
  moveCount: number;
  gamePhase: GamePhase;
  winner: Winner;
}

/**
 * Game actions interface
 */
export interface GameActions {
  clickSquare: (row: number, col: number) => void;
  resetGame: () => void;
  newGame: () => void;
  isValidMove: (row: number, col: number) => boolean;
}

/**
 * Complete game context (state + actions)
 */
export interface GameContext extends GameState, GameActions {}

/**
 * Props for game components
 */
export interface GameBoardProps {
  className?: string; // Allow custom styling
}

export interface BoardSquareProps {
  value: Cell;
  onClick: () => void;
  row: number;
  col: number;
  isHighlighted?: boolean;
  isDisabled?: boolean;
}

export interface GameStatusProps {
  currentPlayer: Player;
  winner?: Winner;
  gamePhase?: GamePhase;
  moveCount?: number;
}

export interface GameControlsProps {
  onReset: () => void;
  onNewGame: () => void;
  isDisabled?: boolean;
}