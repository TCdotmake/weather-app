import PREF from "./loadPref";
import mkWeatherTime from "./mkWeatherTime";
export default function updateLocale(data) {
  let cities = document.querySelectorAll(".city");
  for (let city of cities) {
    city.innerHTML = data.location.name;
  }
  let regions = document.querySelectorAll(".region-info");
  for (let n of regions) {
    n.innerHTML = `${data.location.region}, ${data.location.country}`;
  }
  if (PREF.weatherView == "current") {
    let time = document.getElementById("time");
    time.innerHTML = mkWeatherTime(data.current.last_updated_epoch);
  }
}
