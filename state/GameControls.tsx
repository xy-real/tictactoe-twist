interface GameControlsProps {
  onReset: () => void;
}

export default function GameControls({ onReset }: GameControlsProps) {
  return (
    <div className="flex gap-4 mt-4 md:mt-6 lg:mt-8">
      <button
        onClick={onReset}
        className="px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white font-semibold text-sm md:text-base rounded-lg md:rounded-xl border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
      >
        Reset Game
      </button>
    </div>
  );
}
