import PREF from "./loadPref";

export default function updateUnit() {
  changeValue();
  changeUnit();
}

function changeValue() {
  const values = document.querySelectorAll(".value");
  for (let n of values) {
    if (PREF.unit == "imperial") {
      n.innerHTML = n.dataset.imp;
    } else {
      n.innerHTML = n.dataset.met;
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
