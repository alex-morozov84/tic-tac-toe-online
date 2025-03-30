import { GameId } from '@/kernel/ids'
import { GameLayout } from '../ui/layout'
import { GamePlayers } from '../ui/players'
import { GameDomain } from '@/entities/game'
import { GameStatus } from '../ui/status'
import { GameField } from '../ui/field'

export function Game({ gameId }: { gameId: GameId }) {
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
  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  )
}
