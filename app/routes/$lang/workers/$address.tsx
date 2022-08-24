import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = ({ params }) => {
  if (!params.address) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return json({
    address: params.address,
  })
}

export default function Address() {
  const { address } = useLoaderData()

  return <div>{address}</div>
}
