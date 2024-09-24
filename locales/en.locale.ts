import { articleOneEn } from "./articles/articleTest.locale";
import { articleTwoEn } from "./articles/articleTwo.locale";
import { aboutPageEn } from "./pages/about.locale";

export default {
  home: "Home",
  about: "About",
  "home-header": "Article Collection",
  "home-header-desc":
    "This website offers tips, tricks, and creative solutions to help fix bugs and configuration issues in software development. Designed especially for beginner developers looking to learn easier and more efficiently.",
  "search-placeholder": "find title and tag of articles",
  ...aboutPageEn,
  ...articleOneEn,
  ...articleTwoEn,
};
