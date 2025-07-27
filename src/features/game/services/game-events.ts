import { GameDomain } from '@/entities/game'
import { GameId } from '@/kernel/ids'
import { EventsChanel } from '@/shared/lib/events'

type GameEvent = {
  type: 'game-changed'
  data: GameDomain.GameEntity
}

type Listener = (game: GameEvent) => void

class GameEventsService {
  eventsChannel = new EventsChanel('game')

  async addListener(gameId: GameId, listener: Listener) {
    console.log('addListener', gameId)
    return this.eventsChannel.concume(gameId, (data) => {
      console.log('data', data)
      listener(data as GameEvent)
    })
  }

  async emit(game: GameDomain.GameEntity) {
    return this.eventsChannel.emit(game.id, {
      type: 'game-changed',
      data: game,
    } satisfies GameEvent)
  }
}

export const gameEvents = new GameEventsService()
