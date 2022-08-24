import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { detectLanguageOnServer } from '~/utils/i18n'

export const loader: LoaderFunction = ({ request }) => {
  const lng = detectLanguageOnServer(request)

  return redirect(`/${lng}`)
}
