import PREF from "./loadPref";
export default function updateLocaleSection(obj) {
  updateDate(obj);
  updateForecast(obj);

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
  }
  if (day.daily_chance_of_snow > 0) {
    document.getElementById(
      "snow-chance"
    ).innerHTML = `Chance of Snow: ${day.daily_chance_of_snow}%`;
  }
}

function updateDate(obj) {
  const date = new Date(obj.date);
  const month = date.toLocaleString("default", { month: "long" });
  const day = obj.date.slice(-2);
  document.getElementById("locale-date").innerHTML = `${month} ${day}`;
}
