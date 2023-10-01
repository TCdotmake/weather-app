import mkNav from "./mkNav";
import initLocaleContent from "./initLocaleContent";
export default function initLocale() {
  //section
  const locale = document.createElement("section");
  locale.classList.add("chunk");
  locale.id = "locale";
  const localeNav = mkNav();
  localeNav.id = "locale-nav";
  localeNav.firstChild.firstChild.classList.add("selected");
  locale.appendChild(localeNav);
  locale.appendChild(initLocaleContent());
  return locale;
}
