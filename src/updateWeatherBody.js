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
    mainTemp.dataset.met = source.temp_c;
    mainTemp.dataset.imp = source.temp_f;
    let temp;
    if (PREF.unit != "imperial") {
      temp = mainTemp.dataset.met;
    } else {
      temp = mainTemp.dataset.imp;
    }
    mainTemp.innerHTML = temp;
  }
}
