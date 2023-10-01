import mkNav from "./mkNav";
import initLocaleContent from "./initLocaleContent";
export default function initLocale() {
  //section
  const locale = document.createElement("section");
  locale.classList.add("chunk");
  locale.id = "locale";
  locale.appendChild(mkNav());
  locale.appendChild(initLocaleContent());
  return locale;
}
