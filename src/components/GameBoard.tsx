'use client'

import React, {useState} from 'react';

export default function GameBoard()
{
    const [board, setBoard] = useState<(null | 'X' | 'O')[][]>([
            [null, null, null],
            [null, null, null],
            [null, null, null]
    ]);
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

    function clickSquare(row:number, col:number) {
        if(board[row][col] !== null) return;

        const newBoard = [...board];
        newBoard[row]=[...board[row]];

        newBoard[row][col] = currentPlayer;

        setBoard(newBoard);

        if(currentPlayer === 'X') {
            setCurrentPlayer('O');
        } else {
            setCurrentPlayer('X');
        }
    }

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-blue-100 drop-shadow-lg">Tic Tac Toe - No Tie</h1>
            <h2 className="text-2xl mb-6 text-blue-200">Player: <span className="text-blue-300 font-bold">{currentPlayer}</span></h2>

            <div className="grid grid-cols-3 grid-rows-3 gap-3 w-80 h-80 bg-slate-800 p-3 rounded-xl shadow-2xl border border-blue-700/50">
                {/* Row 0 */}
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(0, 0)}
                >
                    {board[0][0]}
                </button>
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(0, 1)}
                >
                    {board[0][1]}
                </button>
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(0, 2)}
                >
                    {board[0][2]}
                </button>

                {/* Row 1 */}
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(1, 0)}
                >
                    {board[1][0]}
                </button>
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(1, 1)}
                >
                    {board[1][1]}
                </button>
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(1, 2)}
                >
                    {board[1][2]}
                </button>

                {/* Row 2 */}
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(2, 0)}
                >
                    {board[2][0]}
                </button>
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(2, 1)}
                >
                    {board[2][1]}
                </button>
                <button 
                    className="bg-slate-100 border-2 border-slate-600 text-4xl font-bold text-slate-800 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 rounded-lg shadow-inner"
                    onClick={() => clickSquare(2, 2)}
                >
                    {board[2][2]}
                </button>
            </div>
        </div>
    )

}