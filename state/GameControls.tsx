interface GameControlsProps {
  onReset: () => void;
}

export default function GameControls({ onReset }: GameControlsProps) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onReset}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Reset Game
      </button>
    </div>
  );
}
