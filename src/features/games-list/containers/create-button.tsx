'use client'

import { Button } from '@/shared/ui/button'
import { useActionState } from '@/shared/lib/react'
import { createGameAction } from '@/features/games-list/actions/create-game'
import { mapLeft, right } from '@/shared/lib/either'
import { startTransition } from 'react'

export function CreateButton() {
  const [data, dispatch, isPending] = useActionState(createGameAction, right(undefined))

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={mapLeft(
        data,
        (e) =>
          ({
            ['can-create-only-one-game']: 'Вы можете создать только одну игру',
            ['user-not-found']: 'Пользователя нету',
          })[e],
      )}
    >
      Создать игру
    </Button>
  )
}
