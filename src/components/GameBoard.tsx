'use client'

import React from 'react';
import BoardSquare from './BoardSquare';
import GameControls from '../../state/GameControls';
import GameStatus from './GameStatus';
import useGameState from '../../state/hooks/useGameState';

export default function GameBoard() {
    // Use our custom hook for all game logic
    const gameState = useGameState();

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-blue-100 drop-shadow-lg">Tic Tac Toe - No Tie</h1>
            
            <GameStatus 
                currentPlayer={gameState.currentPlayer}
                winner={gameState.winner}
                moveCount={gameState.moveCount}
                gamePhase={gameState.gamePhase}
            />

            <div className="grid grid-cols-3 grid-rows-3 gap-3 w-80 h-80 bg-slate-800 p-3 rounded-xl shadow-2xl border border-blue-700/50">
                {/* Row 0 */}
                <BoardSquare value={gameState.board[0][0]} onClick={() => gameState.clickSquare(0, 0)} row={0} col={0} />
                <BoardSquare value={gameState.board[0][1]} onClick={() => gameState.clickSquare(0, 1)} row={0} col={1} />
                <BoardSquare value={gameState.board[0][2]} onClick={() => gameState.clickSquare(0, 2)} row={0} col={2} />

                {/* Row 1 */}
                <BoardSquare value={gameState.board[1][0]} onClick={() => gameState.clickSquare(1, 0)} row={1} col={0} />
                <BoardSquare value={gameState.board[1][1]} onClick={() => gameState.clickSquare(1, 1)} row={1} col={1} />
                <BoardSquare value={gameState.board[1][2]} onClick={() => gameState.clickSquare(1, 2)} row={1} col={2} />

                {/* Row 2 */}
                <BoardSquare value={gameState.board[2][0]} onClick={() => gameState.clickSquare(2, 0)} row={2} col={0} />
                <BoardSquare value={gameState.board[2][1]} onClick={() => gameState.clickSquare(2, 1)} row={2} col={1} />
                <BoardSquare value={gameState.board[2][2]} onClick={() => gameState.clickSquare(2, 2)} row={2} col={2} />
            </div>

            <GameControls onReset={gameState.resetGame} onNewGame={gameState.newGame} />
        </div>
    )

}