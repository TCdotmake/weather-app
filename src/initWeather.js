import searchIcon from "./searchIcon";

export default function initWeather() {
  // section
  const weather = document.createElement("section");
  weather.classList.add("chunk");
  weather.classList.add("weather");
  weather.appendChild(initWeatherTop());
  weather.appendChild(initWeatherMiddle());
  weather.appendChild(initWeatherBottom());
  return weather;
}

function initWeatherTop() {
  const weatherTop = document.createElement("div");
  weatherTop.classList.add("weather-top");
  // locale and time
  const weatherLocale = document.createElement("div");
  weatherLocale.classList.add("weather-locale");
  const city = document.createElement("h2");
  city.classList.add("city");
  const regionInfo = document.createElement("p");
  regionInfo.classList.add("region-info");
  const time = document.createElement("h3");
  time.id = "time";
  weatherLocale.appendChild(city);
  weatherLocale.appendChild(regionInfo);
  weatherLocale.appendChild(time);

  //query input
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("weather-input");
  const queryInput = document.createElement("input");
  queryInput.setAttribute("type", "text");
  queryInput.setAttribute("placeHolder", "Search Location...");
  queryInput.id = "queryInput";
  searchIcon.id = "searchIcon";
  inputDiv.appendChild(queryInput);
  inputDiv.appendChild(searchIcon);

  weatherTop.appendChild(weatherLocale);
  weatherTop.appendChild(inputDiv);
  return weatherTop;
}

function initWeatherMiddle() {
  const weatherMiddle = document.createElement("div");
  weatherMiddle.classList.add("weather-middle");
  const icon = new Image();
  icon.id = "main-icon";
  weatherMiddle.appendChild(icon);
  const desc = document.createElement("h2");
  desc.id = "main-desc";
  weatherMiddle.appendChild(desc);
  const tempDiv = document.createElement("div");
  const dot = document.createElement("p");
  dot.innerHTML = "º";
  const unit = document.createElement("p");
  unit.classList.add("unit");
  unit.dataset.type = "temp";
  const temp = document.createElement("h1");
  temp.id = "main-temp";
  tempDiv.appendChild(temp);
  tempDiv.appendChild(dot);
  tempDiv.appendChild(unit);
  weatherMiddle.appendChild(tempDiv);
  return weatherMiddle;
}

function initWeatherBottom() {
  const weatherBottom = document.createElement("div");
  weatherBottom.classList.add("weather-bottom");
  const feel = document.createElement("p");
  feel.id = "feel";
  const humidity = document.createElement("p");
  humidity.id = "humidity";
  const wind = document.createElement("p");
  wind.id = "wind";
  const vis = document.createElement("p");
  vis.id = "vis";
  const uv = document.createElement("p");
  uv.id = "uv";
  weatherBottom.appendChild(feel);
  weatherBottom.appendChild(humidity);
  weatherBottom.appendChild(wind);
  weatherBottom.appendChild(vis);
  weatherBottom.appendChild(uv);
  return weatherBottom;
}
