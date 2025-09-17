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
        <div className="min-h-screen max-w-7xl mx-auto lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-8 xl:gap-12 lg:p-8">
            {/* Mobile: Fixed header section */}
            <div className="lg:hidden">
                <div className="p-4 md:p-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-blue-100 drop-shadow-lg text-center">TWIST-Tac-Toe</h1>
                    
                    <div className="w-full flex justify-center">
                        <GameStatus 
                            currentPlayer={gameState.currentPlayer}
                            winner={gameState.winner}
                            moveCount={gameState.moveCount}
                            gamePhase={gameState.gamePhase}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile: Absolutely positioned centered board */}
            <div className="lg:hidden fixed inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 md:gap-4 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-slate-800 p-3 md:p-4 rounded-xl shadow-2xl border-2 border-blue-700/50 pointer-events-auto">
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
            </div>

            {/* Mobile: Fixed controls at bottom */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-center p-4 pointer-events-none z-10">
                <div className="pointer-events-auto">
                    <GameControls onReset={gameState.resetGame} />
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:block lg:min-h-screen lg:relative">
                <h1 className="text-5xl font-bold py-8 text-blue-100 drop-shadow-lg text-center">TWIST-Tac-Toe</h1>
                
                {/* Desktop: Absolutely positioned centered board */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="grid grid-cols-3 grid-rows-3 gap-5 xl:gap-6 w-[500px] h-[500px] xl:w-[580px] xl:h-[580px] 2xl:w-[640px] 2xl:h-[640px] bg-slate-800 p-6 xl:p-7 rounded-xl shadow-2xl border-2 border-blue-700/50 pointer-events-auto">
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

                    {/* Desktop controls below board */}
                    <div className="mt-8 pointer-events-auto">
                        <GameControls onReset={gameState.resetGame} />
                    </div>
                </div>

                {/* Desktop: GameStatus centered in right space */}
                <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 translate-x-[320px] xl:translate-x-[380px] 2xl:translate-x-[420px] z-20 pointer-events-auto">
                    <GameStatus 
                        currentPlayer={gameState.currentPlayer}
                        winner={gameState.winner}
                        moveCount={gameState.moveCount}
                        gamePhase={gameState.gamePhase}
                    />
                </div>
            </div>
        </div>
    )

}