'use server'

import { getCurrentUser } from '@/entities/user/server'

export const doStepAction = async (state: unknown, index: number) => {
  const currentUser = await getCurrentUser()
}
