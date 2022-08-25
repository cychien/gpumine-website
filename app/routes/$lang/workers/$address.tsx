import type { LoaderFunction } from '@remix-run/node'
import { useParams } from '@remix-run/react'

export const loader: LoaderFunction = ({ params }) => {
  if (!params.address) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return null
}

export default function Address() {
  const { address } = useParams()

  return <div>{address}</div>
}
