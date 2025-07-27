import { GameId } from '@/kernel/ids'
import { gameRepository } from '../repositories/game'
import { left, right } from '@/shared/lib/either'
import { PlayerEntity } from '../domain'

export async function surrendGame(gameId: GameId, player: PlayerEntity) {
  const game = await gameRepository.getGame({ id: gameId })

  if (!game) {
    return left('game-not-found')
  }

  if (game.status !== 'inProgress') {
    return left('game-is-not-in-progress' as const)
  }

  if (!game.players.some((p) => p.id === player.id)) {
    return left('player-is-not-in-game' as const)
  }

  return right(
    await gameRepository.saveGame({
      ...game,
      status: 'gameOver',
      winner: game.players.find((p) => p.id !== player.id)!,
    }),
  )
}
