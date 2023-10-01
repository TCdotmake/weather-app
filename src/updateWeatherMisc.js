import PREF from "./loadPref";
export default function updateWeatherMisc(data) {
  let source = null;
  if (PREF.weatherView == "current") {
    source = data.current;
  }
  if (source != null) {
    //single unit values
    //humidity
    document.getElementById("hum-val").innerHTML = source.humidity;
    //wind direction
    document.getElementById("wind-dir").innerHTML = source.wind_dir;
    document.getElementById("uv-val").innerHTML = source.uv;
    //imperial and metric
    const valArr = [];

    //feel
    const feelVal = document.getElementById("feel-val");
    feelVal.dataset.imp = source.feelslike_f;
    feelVal.dataset.met = source.feelslike_c;
    valArr.push(feelVal);

    //wind speed
    const windVal = document.getElementById("wind-val");
    windVal.dataset.imp = source.wind_mph;
    windVal.dataset.met = source.wind_kph;
    valArr.push(windVal);

    //visibility
    const visVal = document.getElementById("vis-val");
    visVal.dataset.imp = source.vis_miles;
    visVal.dataset.met = source.vis_km;
    valArr.push(visVal);

    for (let item of valArr) {
      let value;
      if (PREF.unit == "imperial") {
        value = item.dataset.imp;
      } else {
        value = item.dataset.met;
      }
      item.innerHTML = value;
    }
  }
}
