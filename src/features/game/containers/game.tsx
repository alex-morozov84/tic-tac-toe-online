'use client'

import { GameId } from '@/kernel/ids'
import { GameLayout } from '../ui/layout'
import { GamePlayers } from '../ui/players'
import { GameDomain } from '@/entities/game'
import { GameStatus } from '../ui/status'
import { GameField } from '../ui/field'
import { useEffect, useState } from 'react'

export function Game({ gameId }: { gameId: GameId }) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const gameEvents = new EventSource(`/game/${gameId}/stream`)

    gameEvents.addEventListener('message', (message) => {
      console.log(message.data)
      setData(message.data)
    })
  }, [gameId])

  const game: GameDomain.GameEntity = {
    id: '1',
    // creator: {
    //   id: '1',
    //   login: 'Test',
    //   rating: 1000,
    // },
    players: [
      {
        id: '1',
        login: 'Test',
        rating: 1000,
      },
      {
        id: '1',
        login: 'Test',
        rating: 1000,
      },
    ],
    // field: Array(9).fill(null),
    field: [null, null, null, 'X', 'O', null, null, null, null],
    status: 'gameOverDraw',
  }

  return <div>{JSON.stringify(data)}</div>

  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  )
}
