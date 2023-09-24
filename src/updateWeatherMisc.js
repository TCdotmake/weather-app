import PREF from "./loadPref";
export default function updateWeatherMisc(data) {
  let source = null;
  if (PREF.weatherView == "current") {
    source = data.current;
  }
  if (source != null) {
    //feel
    const feelVal = document.getElementById("feel-val");
    feelVal.dataset.tempF = source.feelslike_f;
    feelVal.dataset.tempC = source.feelslike_c;
    let temp;
    if (PREF.unit != "imperial") {
      temp = feelVal.dataset.tempC;
    } else {
      temp = feelVal.dataset.tempF;
    }
    feelVal.innerHTML = temp;
    //humidity
    document.getElementById("hum-val").innerHTML = source.humidity;
    //wind
    document.getElementById("wind-dir").innerHTML = source.wind_dir;
    const windVal = document.getElementById("wind-val");
    windVal.dataset.mph = source.wind_mph;
    windVal.dataset.kph = source.wind_kph;
    let speed;
    if (PREF.unit != "imperial") {
      speed = windVal.dataset.kph;
    } else {
      speed = windVal.dataset.mph;
    }
    windVal.innerHTML = speed;
  }
}
