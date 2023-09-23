import PREF from "./loadPref";
export default function updateWeatherBody(data) {
  let source = null;
  if (PREF.weatherView == "current") {
    source = data.current;
  }
  if (source != null) {
    document.getElementById("main-icon").src = source.condition.icon;
    document.getElementById("main-desc").innerHTML = source.condition.text;
    const mainTemp = document.getElementById("main-temp");
    mainTemp.dataset.tempC = source.temp_c;
    mainTemp.dataset.tempF = source.temp_f;
    let temp;
    if (PREF.unit != "imperial") {
      temp = mainTemp.dataset.tempC;
    } else {
      temp = mainTemp.dataset.tempF;
    }
    mainTemp.innerHTML = temp;
  }
}
