import {
  articleOneEn,
  articleOneIndo,
} from "./locales/articles/articleTest.locale";
import idLocale from "./locales/id.locale";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "id",
  messages: {
    id: {
      ...idLocale,
      ...articleOneIndo,
    },
    en: {
      home: "Home",
      about: "About",
      "home-header": "Article Collection",
      "home-header-desc":
        "This website offers tips, tricks, and creative solutions to help fix bugs and configuration issues in software development. Designed especially for beginner developers looking to learn easier and more efficiently.",
      ...articleOneEn,
    },
  },
}));
