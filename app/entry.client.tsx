import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import { initI18nOnClient } from "./utils/i18n";
(async function () {
  const i18nInstance = await initI18nOnClient();

  hydrateRoot(
    document,
    <I18nextProvider i18n={i18nInstance}>
      <RemixBrowser />
    </I18nextProvider>
  );
})();
