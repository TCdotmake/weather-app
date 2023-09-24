import PREF from "./loadPref";

export default function updateUnit() {
  changeUnit();

  const values = document.querySelectorAll(".value");
  for (let n of values) {
    //temp
    if (n.dataset.type == "temp") {
      if (PREF.unit == "imperial") {
        n.innerHTML = n.dataset.tempF;
      } else {
        n.innerHTML = n.dataset.tempC;
      }
    }
    //wind
    if (n.dataset.type == "wind") {
      if (PREF.unit == "imperial") {
        n.innerHTML = n.dataset.mph;
      } else {
        n.innerHTML = n.dataset.kph;
      }
    }
  }
}

function changeUnit() {
  const units = document.querySelectorAll(".unit");

  for (let n of units) {
    // temp
    if (n.dataset.type == "temp") {
      if (PREF.unit == "imperial") {
        n.innerHTML = "ºF";
      } else {
        n.innerHTML = "ºC";
      }
    }
    // wind
    if (n.dataset.type == "wind") {
      if (PREF.unit == "imperial") {
        n.innerHTML = "MPH";
      } else {
        n.innerHTML = "KPH";
      }
    }
  }
}
