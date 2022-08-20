import type { LoaderFunction } from '@remix-run/node'

// This is catch-all path

export const loader: LoaderFunction = () => {
  throw new Response('Not Found', {
    status: 404,
  })
}
