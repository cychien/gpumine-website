import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { detectLanguageOnServer } from '~/utils/i18n'

export const loader: LoaderFunction = ({ request }) => {
  const lng = detectLanguageOnServer(request)
  const url = new URL(request.url)
  const pathname = url.pathname

  return redirect(`/${lng}${pathname}`)
}
