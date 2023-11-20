import updateUnit from "./updateUnit";
import updateApp from "./updateApp";

import initMain from "./initMain";
import mkNav from "./mkNav";
import initLocaleContent from "./initLocaleContent";
import initForecastContent from "./initForecastContent";
import initHourlyContent from "./initHourlyContent";
export default function initPage() {
  const bg = document.createElement("div");
  bg.id = "bg";
  document.body.append(bg);

  bg.append(
    initMain(),
    mkNav(),
    initLocaleContent(),
    initForecastContent(),
    initHourlyContent()
  );

  document.getElementById("locale-btn").classList.add("selected");

  updateApp();
  updateUnit();

  const searchIcon = document.getElementById("searchIcon");
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    const query = document.getElementById("queryInput").value;
    updateApp(query);
    document.getElementById("queryInput").value = null;
  });
}
