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
    if (PREF.unit == "imperial") {
      n.innerHTML = n.dataset.imp;
    } else {
      n.innerHTML = n.dataset.met;
    }
  }
}
