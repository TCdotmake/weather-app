import initHourlyContent from "./initHourlyContent";
import mkNav from "./mkNav";

export default function initHourly() {
  //section
  const hourly = document.createElement("section");
  hourly.classList.add("section-container");
  hourly.classList.add("optional");
  hourly.id = "hourly";
  const hourlyNav = mkNav();
  hourlyNav.id = "hourly-nav";
  const ul = hourlyNav.firstChild;
  ul.lastChild.classList.add("selected");
  hourly.appendChild(hourlyNav);
  hourly.appendChild(initHourlyContent());
  return hourly;
}
