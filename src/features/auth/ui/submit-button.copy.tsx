import { Alert, AlertDescription } from '@/shared/ui/alert'
import React from 'react'
import { Either, matchEither } from '@/shared/lib/either'

// export function ErrorMessage({ error }: { error?: string }) {
//   if (error) {
//     return (
//       <Alert variant="destructive">
//         <AlertDescription>{error}</AlertDescription>
//       </Alert>
//     )
//   }
//   return null
// }

export function ErrorMessage({ error }: { error: Either<string, unknown> }) {
  return matchEither(error, {
    left: (error) => (
      <Alert>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    ),
    right: () => null,
  })
}
