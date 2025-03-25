import { userRepository } from '@/entities/user/repositories/user'
import { passwordService } from '@/entities/user/services/password'
import { left, right } from '@/shared/lib/either'

export const verifyUserPassword = async ({
  login,
  password,
}: {
  login: string
  password: string
}) => {
  const user = await userRepository.getUser({ login })

  if (!user) {
    return left('wrong-login-or-password' as const)
  }

  const isPasswordCompare = await passwordService.comparePasswords({
    hash: user.passwordHash,
    password,
    salt: user.salt,
  })

  if (!isPasswordCompare) {
    return left('wrong-login-or-password' as const)
  }

  return right(user)
}
