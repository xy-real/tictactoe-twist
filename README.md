# TWIST-Tac-Toe 🎯

A modern twist on the classic Tic-Tac-Toe game that **eliminates ties forever**! Built with Next.js, React, TypeScript, and Tailwind CSS.

🎮 **[Play Now - Live Demo](https://tictactoe-twist.vercel.app/)**

## 🎮 The Twist

Traditional Tic-Tac-Toe can end in ties, but TWIST-Tac-Toe introduces a **moving phase** that ensures every game has a winner:

1. **Placing Phase**: Players take turns placing X's and O's (first 8 moves)
2. **Moving Phase**: After 8 pieces are placed, players can move their existing pieces to adjacent empty squares
3. **No Ties**: The moving phase continues until someone gets three in a row!

## ✨ Features

- 🚫 **No Ties**: Revolutionary moving phase eliminates draws
- 📱 **Fully Responsive**: Optimized for mobile and desktop
- 🎨 **Modern UI**: Beautiful dark theme with smooth animations
- 🔄 **Visual Feedback**: Selected pieces glow blue, valid moves pulse green
- ⚡ **Real-time Updates**: Instant game state updates and win detection
- 🎯 **Smart Layout**: Mobile-first design with desktop enhancements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xy-real/tictactoe-twist.git
cd tictactoe-twist
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## � Live Demo

The game is deployed and available at: **[https://tictactoe-twist.vercel.app/](https://tictactoe-twist.vercel.app/)**

- ✅ Fully responsive on all devices
- ⚡ Fast loading with Next.js optimization
- 🔄 Real-time game state updates
- 📱 Touch-friendly mobile interface

## �🎯 How to Play

### Placing Phase (Moves 1-8)
- Click any empty square to place your piece (X or O)
- Players alternate turns
- Standard tic-tac-toe rules apply

### Moving Phase (After 8 moves)
- **Select**: Click on one of your pieces to select it (glows blue)
- **Move**: Click an adjacent empty square to move your piece
- **Win**: Get three of your pieces in a row (horizontal, vertical, or diagonal)

### Visual Indicators
- 🔵 **Blue Glow**: Your currently selected piece
- 🟢 **Green Pulse**: Valid destination squares for your selected piece
- ⚠️ **Yellow Warning**: Moving phase countdown in status panel

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: Custom React Hooks
- **Architecture**: Component-based with separation of concerns

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── GameBoard.tsx      # Main game container
│   ├── BoardSquare.tsx    # Individual squares
│   └── GameStatus.tsx     # Game state display
├── types/                 # TypeScript definitions
│   └── game.ts           # Game-related types
└── state/                 # Game logic
    ├── hooks/
    │   └── useGameState.ts # Main game state hook
    ├── utils/
    │   └── gameLogic.ts   # Pure game functions
    └── GameControls.tsx   # Reset button component
```

## 🎨 Responsive Design

- **Mobile**: Fixed header with centered board and bottom controls
- **Tablet**: Enhanced sizing and spacing
- **Desktop**: Side-by-side layout with floating game status panel
- **All Sizes**: Board remains perfectly centered regardless of content changes

## 🏗️ Architecture Highlights

- **Pure Functions**: Game logic separated into testable utility functions
- **Custom Hooks**: `useGameState` hook manages all game state and actions
- **Component Architecture**: Modular, reusable React components
- **Type Safety**: Full TypeScript coverage with strict typing
- **Responsive Layout**: Mobile-first design with desktop enhancements

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🎯 Future Enhancements

- [ ] Multiplayer support
- [ ] AI opponent with difficulty levels
- [ ] Game history and statistics
- [ ] Sound effects and animations
- [ ] Tournament mode
- [ ] Custom themes
