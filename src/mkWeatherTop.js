import mkWeatherTime from "./mkWeather";
import searchIcon from "./searchIcon";
function mkWeatherTop(data, type) {
  const weatherTop = document.createElement("div");
  weatherTop.classList.add("weather-top");

  //   // locale and
  const weatherLocale = document.createElement("div");
  weatherLocale.classList.add("weather-locale");
  const city = document.createElement("h2");
  city.innerHTML = data.location.name;
  const regionInfo = document.createElement("p");
  regionInfo.innerHTML = `${data.location.region}, ${data.location.country}`;
  weatherLocale.appendChild(city);
  weatherLocale.appendChild(regionInfo);
  let time;

  if (type == "current") {
    time = mkWeatherTime(data.current);
    weatherLocale.appendChild(time);
  }

  //   //query input
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("weather-input");
  const queryInput = document.createElement("input");
  queryInput.setAttribute("type", "text");
  queryInput.setAttribute("placeHolder", "Search Location...");
  inputDiv.appendChild(queryInput);
  inputDiv.appendChild(searchIcon);

  weatherTop.appendChild(weatherLocale);
  weatherTop.appendChild(inputDiv);
  return weatherTop;
}

export default mkWeatherTop;
