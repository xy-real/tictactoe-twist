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
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-8 xl:gap-12 p-4 md:p-6 lg:p-8 min-h-screen max-w-7xl mx-auto">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-blue-100 drop-shadow-lg lg:text-center lg:w-full">TWIST-Tac-Toe</h1>
                
                {/* GameStatus on mobile - shows above board */}
                <div className="lg:hidden w-full">
                    <GameStatus 
                        currentPlayer={gameState.currentPlayer}
                        winner={gameState.winner}
                        moveCount={gameState.moveCount}
                        gamePhase={gameState.gamePhase}
                    />
                </div>

                <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 md:gap-4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] bg-slate-800 p-3 md:p-4 lg:p-5 rounded-xl shadow-2xl border-2 border-blue-700/50">
                {/* Row 0 */}
                <BoardSquare 
                    value={gameState.board[0][0]} 
                    onClick={() => gameState.clickSquare(0, 0)} 
                    row={0} 
                    col={0}
                    isSelected={gameState.isSelected(0, 0)}
                    isValidDestination={gameState.isValidDestination(0, 0)}
                />
                <BoardSquare 
                    value={gameState.board[0][1]} 
                    onClick={() => gameState.clickSquare(0, 1)} 
                    row={0} 
                    col={1}
                    isSelected={gameState.isSelected(0, 1)}
                    isValidDestination={gameState.isValidDestination(0, 1)}
                />
                <BoardSquare 
                    value={gameState.board[0][2]} 
                    onClick={() => gameState.clickSquare(0, 2)} 
                    row={0} 
                    col={2}
                    isSelected={gameState.isSelected(0, 2)}
                    isValidDestination={gameState.isValidDestination(0, 2)}
                />

                {/* Row 1 */}
                <BoardSquare 
                    value={gameState.board[1][0]} 
                    onClick={() => gameState.clickSquare(1, 0)} 
                    row={1} 
                    col={0}
                    isSelected={gameState.isSelected(1, 0)}
                    isValidDestination={gameState.isValidDestination(1, 0)}
                />
                <BoardSquare 
                    value={gameState.board[1][1]} 
                    onClick={() => gameState.clickSquare(1, 1)} 
                    row={1} 
                    col={1}
                    isSelected={gameState.isSelected(1, 1)}
                    isValidDestination={gameState.isValidDestination(1, 1)}
                />
                <BoardSquare 
                    value={gameState.board[1][2]} 
                    onClick={() => gameState.clickSquare(1, 2)} 
                    row={1} 
                    col={2}
                    isSelected={gameState.isSelected(1, 2)}
                    isValidDestination={gameState.isValidDestination(1, 2)}
                />

                {/* Row 2 */}
                <BoardSquare 
                    value={gameState.board[2][0]} 
                    onClick={() => gameState.clickSquare(2, 0)} 
                    row={2} 
                    col={0}
                    isSelected={gameState.isSelected(2, 0)}
                    isValidDestination={gameState.isValidDestination(2, 0)}
                />
                <BoardSquare 
                    value={gameState.board[2][1]} 
                    onClick={() => gameState.clickSquare(2, 1)} 
                    row={2} 
                    col={1}
                    isSelected={gameState.isSelected(2, 1)}
                    isValidDestination={gameState.isValidDestination(2, 1)}
                />
                <BoardSquare 
                    value={gameState.board[2][2]} 
                    onClick={() => gameState.clickSquare(2, 2)} 
                    row={2} 
                    col={2}
                    isSelected={gameState.isSelected(2, 2)}
                    isValidDestination={gameState.isValidDestination(2, 2)}
                />
                </div>

                <GameControls onReset={gameState.resetGame} />
            </div>

            {/* GameStatus on desktop - shows to the right of board */}
            <div className="hidden lg:flex lg:flex-col lg:justify-start lg:mt-16 xl:mt-20">
                <GameStatus 
                    currentPlayer={gameState.currentPlayer}
                    winner={gameState.winner}
                    moveCount={gameState.moveCount}
                    gamePhase={gameState.gamePhase}
                />
            </div>
        </div>
    )

}