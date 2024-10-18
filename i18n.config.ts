import {
  articleOneEn,
  articleOneIndo,
} from "./locales/articles/articleTest.locale";
import enLocale from "./locales/en.locale";
import idLocale from "./locales/id.locale";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "id",
  messages: {
    id: {
      ...idLocale,
    },
    en: {
      ...enLocale,
    },
  },
}));
