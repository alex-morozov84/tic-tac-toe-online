import { NextRequest } from 'next/server'
import { sseStream } from '@/shared/lib/sse/server'

export function getGameStream(req: NextRequest) {
  const { response, handleClose, write } = sseStream(req)

  let counter = 1
  const interval = setInterval(() => {
    write(counter++)
  }, 1000)
  handleClose(() => {
    clearInterval(interval)
  })

  return response
}
