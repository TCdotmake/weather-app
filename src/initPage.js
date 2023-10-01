import initWeather from "./initWeather";
import initLocale from "./initLocale";
import updateUnit from "./updateUnit";
import updateApp from "./updateApp";
export default function initPage() {
  document.body.appendChild(initWeather());
  document.body.appendChild(initLocale());
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
