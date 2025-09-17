'use client'

import React, {useState} from 'react';
import BoardSquare from './BoardSquare';
import GameControls from './GameControls';

export default function GameBoard() {
    const [board, setBoard] = useState<(null | 'X' | 'O')[][]>([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

    // Reset the game to initial state
    function resetGame() {
        setBoard([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]);
        setCurrentPlayer('X');
    }

    // Same as reset for now, but could have different logic later
    function newGame() {
        resetGame();
    }

    function clickSquare(row: number, col: number) {
        if(board[row][col] !== null) return;

        const newBoard = [...board];
        newBoard[row] = [...board[row]];

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
                <BoardSquare value={board[0][0]} onClick={() => clickSquare(0, 0)} row={0} col={0} />
                <BoardSquare value={board[0][1]} onClick={() => clickSquare(0, 1)} row={0} col={1} />
                <BoardSquare value={board[0][2]} onClick={() => clickSquare(0, 2)} row={0} col={2} />

                {/* Row 1 */}
                <BoardSquare value={board[1][0]} onClick={() => clickSquare(1, 0)} row={1} col={0} />
                <BoardSquare value={board[1][1]} onClick={() => clickSquare(1, 1)} row={1} col={1} />
                <BoardSquare value={board[1][2]} onClick={() => clickSquare(1, 2)} row={1} col={2} />

                {/* Row 2 */}
                <BoardSquare value={board[2][0]} onClick={() => clickSquare(2, 0)} row={2} col={0} />
                <BoardSquare value={board[2][1]} onClick={() => clickSquare(2, 1)} row={2} col={1} />
                <BoardSquare value={board[2][2]} onClick={() => clickSquare(2, 2)} row={2} col={2} />
            </div>

            <GameControls onReset={resetGame} onNewGame={newGame} />
        </div>
    )

}