import initWeather from "./initWeather";
import initLocale from "./initLocale";
import updateUnit from "./updateUnit";
import updateApp from "./updateApp";
import initForecast from "./initForecast";
import initHourly from "./initHourly";
import initMain from "./initMain";
export default function initPage() {
  const bg = document.createElement("div");
  bg.id = "bg";
  document.body.append(bg);
  bg.append(initMain(), initLocale(), initForecast(), initHourly());

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
