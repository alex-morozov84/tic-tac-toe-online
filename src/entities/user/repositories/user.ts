import { UserEntity } from '@/entities/user/domain'
import { prisma } from '@/shared/lib/db'

export function saveUser(user: UserEntity): Promise<UserEntity> {
  return prisma.user.upsert({
    where: {
      id: user.id,
    },
    create: user,
    update: user,
  })
}

export const userRepository = {}
