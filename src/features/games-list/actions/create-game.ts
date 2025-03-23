'use server'

import { createGame } from '@/entities/game/server'
import { prisma } from '@/shared/lib/db'
import { left } from '@/shared/lib/either'

export const createGameAction = async () => {
  const user = await prisma.user.findFirst()

  if (!user) {
    return left('user-not-found' as const)
  }
  return await createGame(user)
}
