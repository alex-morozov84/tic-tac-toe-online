'use server'

import { left } from '@/shared/lib/either'

export async function signUpAction(state: unknown, formdata: FormData) {
  console.log(formdata.get('login'), formdata.get('password'))
  return left('login-already-taken' as const)
}
