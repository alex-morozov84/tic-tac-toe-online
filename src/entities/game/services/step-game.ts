import { GameId } from '@/kernel/ids'
import { gameRepository } from '../repositories/game'
import { left, right } from '@/shared/lib/either'
import {
  doStep,
  getGameCurrentSymbol,
  getGameNextSymbol,
  getPlayerSymbol,
  PlayerEntity,
} from '../domain'
import { symbol } from 'zod'

export async function stepGame(gameId: GameId, player: PlayerEntity, index: number) {
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

  const stepResult = doStep(game, index, player)

  if (stepResult.type === 'left') {
    return stepResult
  }

  return right(
    await gameRepository.saveGame({
      ...\
    }),
  )
}
