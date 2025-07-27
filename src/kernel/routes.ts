import { GameId } from './ids'

export const routes = {
  signIn: () => '/sign-in',
  signUp: () => '/sign-up',
  home: () => '/',
  game: (gameId: GameId) => `/game/${gameId}`,
  gameStream: (gameId: GameId) => `/game/${gameId}/stream`,
}
