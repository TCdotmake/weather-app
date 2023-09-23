import getData from "./getData";
import initWeather from "./initWeather";
import PREF from "./loadPref";
import toggleUnit from "./toogleUnit";
import updateLocale from "./updateLocale";
import updateUnit from "./updateUnit";
import updateWeather from "./updateWeather";
import updateApp from "./updateApp";
export default function initPage() {
  const weather = initWeather();
  document.body.appendChild(weather);

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
