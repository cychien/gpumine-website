import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import parser from 'accept-language-parser'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { cacheUserLanguage, detectLanguageOnServer } from '~/utils/i18n'
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

  return json({
    language: currentLanguage,
  })
}

export default function Layout() {
  const { language } = useLoaderData()
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(language)
    cacheUserLanguage(language)
  }, [i18n, language])

  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}
