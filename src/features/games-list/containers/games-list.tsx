import { createGame, getIdleGames } from '@/entities/game/server'
import { Layout } from '../ui/layout'
import { GameCard } from '../ui/game-card'
import { CreateButton } from '@/features/games-list/containers/create-button'

export async function GamesList() {
  const games = await getIdleGames()

  return (
    <Layout actions={<CreateButton action={createGame} />}>
      {games.map((game) => (
        <GameCard key={game.id} login={game.creator.login} rating={game.creator.rating} />
      ))}
    </Layout>
  )
}
