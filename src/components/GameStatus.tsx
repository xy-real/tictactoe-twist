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
      <div className="text-center mb-4 md:mb-6 lg:mb-8 p-4 md:p-6 bg-gradient-to-r from-green-800/50 to-emerald-800/50 rounded-xl border-2 border-green-500/50 w-full max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 drop-shadow-lg">
          🎉 Player {winner} Wins! 🎉
        </h2>
        <p className="text-blue-200 mt-2 text-base md:text-lg">Congratulations!</p>
      </div>
    );
  }

  // If it's a tie
  if (winner === 'tie') {
    return (
      <div className="text-center mb-4 md:mb-6 lg:mb-8 p-4 md:p-6 bg-gradient-to-r from-yellow-800/50 to-orange-800/50 rounded-xl border-2 border-yellow-500/50 w-full max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 drop-shadow-lg">
          It&apos;s a Tie!
        </h2>
        <p className="text-blue-200 mt-2 text-base md:text-lg">Great game!</p>
      </div>
    );
  }

  // If we're in the moving phase (after 8 pieces placed)
  if (gamePhase === 'moving') {
    return (
      <div className="text-center mb-4 md:mb-6 lg:mb-8 p-4 md:p-6 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-xl border-2 border-purple-500/50 w-full max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-300 drop-shadow-lg">
          🔄 Moving Phase Activated!
        </h2>
        <p className="text-blue-200 text-base md:text-lg mt-2">
          Player <span className="text-blue-300 font-bold">{currentPlayer}</span>&apos;s turn
        </p>
        <div className="mt-3 space-y-1">
          <p className="text-sm md:text-base text-blue-300">
            1. Click your piece to select it
          </p>
          <p className="text-sm md:text-base text-blue-300">
            2. Click an adjacent empty square to move
          </p>
        </div>
        <p className="text-xs md:text-sm text-yellow-300 mt-3 font-semibold">
          🚫 Board locked at 8 pieces, 1 space remaining
        </p>
      </div>
    );
  }

  // Normal placing phase
  return (
    <div className="text-center mb-4 md:mb-6 lg:mb-8 p-4 md:p-6 bg-gradient-to-r from-slate-800/50 to-blue-800/50 rounded-xl border-2 border-blue-500/50 w-full max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-200">
        Player: <span className="text-blue-300 font-bold">{currentPlayer}</span>
      </h2>
      <p className="text-blue-300 mt-2 text-sm md:text-base">
        {moveCount < 8 ? 'Click an empty square to place your piece' : 'Final moves - no ties allowed!'}
      </p>
      {moveCount >= 6 && moveCount < 8 && (
        <p className="text-yellow-300 text-sm md:text-base mt-2 font-semibold">
          ⚠️ Moving phase activates after {8 - moveCount} more moves!
        </p>
      )}
    </div>
  );
}
