import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  return <div>{t("common.home")}</div>;
}
