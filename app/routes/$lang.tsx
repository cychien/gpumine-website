import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import parser from "accept-language-parser";

import { SUPPORTED_LANGUAGES } from "~/utils/i18n/constants";

export const loader: LoaderFunction = ({ request, params }) => {
  const lang = params.lang;

  if (!lang) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const url = new URL(request.url);
  // The pathname will be like: /en-US/
  const pathname = url.pathname;
  const pathnameWithoutLang = pathname.split("/").slice(2).join("/");

  const supportedLanguage = parser.pick(SUPPORTED_LANGUAGES, lang, {
    loose: true,
  });

  if (!supportedLanguage) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  if (supportedLanguage !== lang) {
    return redirect(`/${supportedLanguage}/${pathnameWithoutLang}`);
  }

  return null;
};

export default function LangLayout() {
  return <Outlet />;
}
