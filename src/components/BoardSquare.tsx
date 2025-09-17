interface BoardSquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  row: number;
  col: number;
  isSelected?: boolean;
  isValidDestination?: boolean;
}

export default function BoardSquare({ 
  value, 
  onClick, 
  row, 
  col, 
  isSelected = false,
  isValidDestination = false 
}: BoardSquareProps) {
  
  // Build dynamic class names based on state
  let baseClasses = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-200 rounded-lg shadow-inner aspect-square flex items-center justify-center ";
  
  if (isSelected) {
    // Selected piece - bright blue glow
    baseClasses += "bg-blue-400 border-3 md:border-4 border-blue-300 text-white shadow-lg shadow-blue-500/50 ring-2 md:ring-4 ring-blue-300/50 ";
  } else if (isValidDestination) {
    // Valid destination - green highlight
    baseClasses += "bg-green-200 border-2 md:border-3 border-green-500 text-slate-800 hover:bg-green-300 animate-pulse ring-1 md:ring-2 ring-green-400/50 ";
  } else {
    // Normal state
    baseClasses += "bg-slate-100 border-2 border-slate-600 text-slate-800 hover:bg-blue-100 hover:border-blue-500 hover:shadow-lg ";
  }
  
  return (
    <button 
      className={baseClasses}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
