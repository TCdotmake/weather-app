import example from "../dummy";

function mkWeather(data = example) {
  console.log(data);

  // section
  const weather = document.createElement("section");
  weather.classList.add("chunk");
  weather.classList.add("weather");

  // top section
  const weatherTop = document.createElement("div");
  weatherTop.classList.add("weather-top");

  const weatherLocale = document.createElement("div");
  const city = document.createElement("h2");
  city.innerHTML = data.location.name;
  const regionInfo = document.createElement("p");
  regionInfo.innerHTML = `${data.location.region}, ${data.location.country}`;
  const date = new Date(data.current.last_updated_epoch);
  let hour = Number(date.getHours());
  let suffix = "AM";
  if (hour > 12) {
    suffix = "PM";
    hour = hour % 12;
  }
  const min = date.getMinutes();
  const localTime = document.createElement("h3");
  localTime.innerHTML = `Local time ${hour}:${min} ${suffix}`;

  weatherLocale.appendChild(city);
  weatherLocale.appendChild(regionInfo);
  weatherLocale.appendChild(localTime);
  weatherTop.appendChild(weatherLocale);

  weather.appendChild(weatherTop);

  return weather;
}

export default mkWeather;
