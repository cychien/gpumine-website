import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { detectLanguageOnServer } from "~/utils/i18n";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);

  const path = url.pathname;
  const pathParts = path.split("/");
  const isIndexPage = pathParts.length <= 2;

  const lng = detectLanguageOnServer(request);

  if (lng === pathParts[1]) {
    return null;
  }

  if (isIndexPage) return redirect(`/${lng}`);

  return redirect(`/${lng}${pathParts.slice(2).join("/")}`);
};

export default function LangLayout() {
  return <Outlet />;
}
