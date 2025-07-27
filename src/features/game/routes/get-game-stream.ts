import { NextRequest } from 'next/server'
import { sseStream } from '@/shared/lib/sse/server'
import { GameId } from '@/kernel/ids'
import { getGameById, surrendGame } from '@/entities/game/server'
import { gameEvents } from '../services/game-events'
import { getCurrentUser } from '@/entities/user/server'

export async function getGameStream(
  req: NextRequest,
  { params }: { params: Promise<{ id: GameId }> },
) {
  const { id } = await params
  const game = await getGameById(id)
  const user = await getCurrentUser()

  if (!game || !user) {
    return new Response('Game not found', { status: 404 })
  }

  const { response, addCloseListener, write } = sseStream(req)

  write(game)

  const unwatch = await gameEvents.addListener(game.id, (event) => {
    console.log('event', event)
    write(event.data)
  })

  addCloseListener(async () => {
    unwatch()

    const result = await surrendGame(id, user)

    if (result.type === 'right') {
      gameEvents.emit(result.value)
    }
  })

  return response
}
