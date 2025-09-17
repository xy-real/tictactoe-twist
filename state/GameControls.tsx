interface GameControlsProps {
  onReset: () => void;
  onNewGame: () => void;
}

export default function GameControls({ onReset, onNewGame }: GameControlsProps) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onReset}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Reset Game
      </button>
      
      <button
        onClick={onNewGame}
        className="px-6 py-2 bg-slate-600 text-white font-semibold rounded-lg border-2 border-slate-700 hover:bg-slate-700 hover:border-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        New Game
      </button>
    </div>
  );
}
