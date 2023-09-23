import searchIcon from "./searchIcon";
import mkWeatherTime from "./mkWeatherTime";

//mkWeather display info based on type of forecast
// types are 'current', 'hourly' and 'day'

function mkWeather(data, type) {
  //   console.log(data);

  // section
  const weather = document.createElement("section");
  weather.classList.add("chunk");
  weather.classList.add("weather");
  const weatherTop = mkWeatherTop(data, type);
  const weatherMiddle = mkWeatherMiddle(data, type);
  weather.appendChild(weatherTop);
  weather.appendChild(weatherMiddle);
  return weather;
}

export default mkWeather;

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
  //todo insert other types here using if

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

function mkWeatherMiddle(data, type) {
  const weatherMiddle = document.createElement("div");
  weatherMiddle.classList.add("weather-middle");
  let source = null;
  if (type == "current") {
    source = data.current;
  }
  //todo insert other types here using if
  if (source != null) {
    const icon = new Image();
    icon.src = source.condition.icon;
    weatherMiddle.appendChild(icon);
    const desc = document.createElement("h2");
    desc.innerHTML = source.condition.text;
    weatherMiddle.appendChild(desc);
    const tempDiv = document.createElement("div");
    const dot = document.createElement("p");
    dot.innerHTML = "º";
    const temp = document.createElement("h1");
    temp.innerHTML = source.temp_f;
    tempDiv.appendChild(temp);
    tempDiv.appendChild(dot);
    weatherMiddle.appendChild(tempDiv);
  }
  return weatherMiddle;
}
