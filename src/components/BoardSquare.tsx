interface BoardSquareProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  row: number;
  col: number;
}

export default function BoardSquare({ value, onClick, row, col }: BoardSquareProps) {
  return (
    <button 
      className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
