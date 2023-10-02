import initForecastContent from "./initForecastContent";
import mkNav from "./mkNav";

export default function initForecast() {
  //section
  const forecast = document.createElement("section");
  forecast.classList.add("chunk");
  forecast.id = "forecast";
  const forecastNav = mkNav();
  forecastNav.id = "forecast-nav";
  const ul = forecastNav.firstChild;
  ul.childNodes[1].classList.add("selected");
  forecast.appendChild(forecastNav);
  forecast.appendChild(initForecastContent());
  return forecast;
}
