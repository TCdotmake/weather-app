import PREF from "./loadPref";
import updateLocale from "./updateLocale";
export default function updateLocaleSection(data) {
  const obj = data.forecast.forecastday[0];
  updateDate(obj);
  updateForecast(obj);
  updateLocale(data);
  const astro = obj.astro;
  const arr = ["sunrise", "sunset", "moonrise", "moonset"];
  for (let item of arr) {
    document.getElementById(item).innerHTML = `${item}: ${astro[item]}`;
  }
}

function updateForecast(obj) {
  const day = obj.day;
  const temp = document.getElementById("loc-avg-temp");
  temp.dataset.imp = `Average Temp: ${day.avgtemp_f}ºF`;
  temp.dataset.met = `Average Temp: ${day.avgtemp_c}ºC`;
  if (PREF.unit == "imperial") {
    temp.innerHTML = temp.dataset.imp;
  } else {
    temp.innerHTML = temp.dataset.met;
  }
  document.getElementById(
    "loc-avg-hum"
  ).innerHTML = `Average Humidity: ${day.avghumidity}%`;
  if (day.daily_chance_of_rain > 0) {
    document.getElementById(
      "rain-chance"
    ).innerHTML = `Chance of Rain: ${day.daily_chance_of_rain}%`;
  } else {
    document.getElementById("rain-chance").innerHTML = "";
  }
  if (day.daily_chance_of_snow > 0) {
    document.getElementById(
      "snow-chance"
    ).innerHTML = `Chance of Snow: ${day.daily_chance_of_snow}%`;
  } else {
    document.getElementById("snow-chance").innerHTML = "";
  }
}

function updateDate(obj) {
  const dateArr = obj.date.split("-");
  dateArr[1] -= 1;
  const date = new Date(...dateArr);

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  document.getElementById("locale-date").innerHTML = `${month} ${day}`;
}
