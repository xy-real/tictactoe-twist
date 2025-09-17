interface GameStatusProps {
  currentPlayer: 'X' | 'O';
  winner?: 'X' | 'O' | 'tie' | null;
  gamePhase?: 'placing' | 'moving';
  moveCount?: number;
}

export default function GameStatus({ 
  currentPlayer, 
  winner, 
  gamePhase = 'placing',
  moveCount = 0 
}: GameStatusProps) {
  
  // If there's a winner, show winner message
  if (winner === 'X' || winner === 'O') {
    return (
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-300 drop-shadow-lg">
          🎉 Player {winner} Wins! 🎉
        </h2>
        <p className="text-blue-200 mt-2">Congratulations!</p>
      </div>
    );
  }

  // If it's a tie
  if (winner === 'tie') {
    return (
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-300 drop-shadow-lg">
          It&apos;s a Tie!
        </h2>
        <p className="text-blue-200 mt-2">Great game!</p>
      </div>
    );
  }

  // If we're in the moving phase (after 8 pieces placed)
  if (gamePhase === 'moving') {
    return (
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-purple-300 drop-shadow-lg">
          🔄 Moving Phase Activated!
        </h2>
        <p className="text-blue-200">
          Player <span className="text-blue-300 font-bold">{currentPlayer}</span>&apos;s turn
        </p>
        <p className="text-sm text-blue-300 mt-1">
          1. Click your piece to select it
        </p>
        <p className="text-sm text-blue-300">
          2. Click an adjacent empty square to move
        </p>
        <p className="text-xs text-yellow-300 mt-1">
          🚫 Board locked at 8 pieces, 1 space remaining
        </p>
      </div>
    );
  }

  // Normal placing phase
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-blue-200">
        Player: <span className="text-blue-300 font-bold">{currentPlayer}</span>
      </h2>
      <p className="text-blue-300 mt-1">
        {moveCount < 8 ? 'Click an empty square to place your piece' : 'Final moves - no ties allowed!'}
      </p>
      {moveCount >= 6 && moveCount < 8 && (
        <p className="text-yellow-300 text-sm mt-1">
          ⚠️ Moving phase activates after move {8 - moveCount} more moves!
        </p>
      )}
    </div>
  );
}
