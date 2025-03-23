'use client'

import { Button } from '@/shared/ui/button'
import { useActionState } from 'react'
import { createGameAction } from '@/features/games-list/actions/create-game'
import { right } from '@/shared/lib/either'

export function CreateButton() {
  useActionState(createGameAction, right(undefined))
  return <Button onClick={}>Создать игру</Button>
}
