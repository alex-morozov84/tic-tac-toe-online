'use client'

import { GameDomain } from '@/entities/game'

export function GameField({
  game,
  onCellClick,
}: {
  game: GameDomain.GameEntity
  onCellClick: (index: number) => void
}) {
  return (
    <div className="grid grid-cols-3">
      {game.field.map((symbol, i) => (
        <button
          key={i}
          className="border border-primary w-10 h-10 flex justify-center items-center"
          onClick={() => onCellClick(i)}
        >
          {symbol ?? ''}
        </button>
      ))}
    </div>
  )
}
