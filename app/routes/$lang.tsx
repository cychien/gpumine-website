import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import parser from 'accept-language-parser'

import Header from '~/components/Header'
import { detectLanguageOnServer } from '~/utils/i18n'
import { SUPPORTED_LANGUAGES } from '~/utils/i18n/constants'

export const loader: LoaderFunction = ({ request, params }) => {
  const langParam = params.lang

  if (!langParam) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const url = new URL(request.url)
  // The pathname will be like: /en-US/
  const pathname = url.pathname
  const pathnameWithoutLang = pathname.split('/').slice(2).join('/')

  const supportedLanguageFromLangParam = parser.pick(
    SUPPORTED_LANGUAGES,
    langParam,
    {
      loose: true,
    }
  )
  const isValidPath = !!supportedLanguageFromLangParam

  if (!isValidPath) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  const currentLanguage = detectLanguageOnServer(request)

  if (supportedLanguageFromLangParam !== currentLanguage) {
    return redirect(`/${currentLanguage}/${pathnameWithoutLang}`)
  }

  return null
}

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
