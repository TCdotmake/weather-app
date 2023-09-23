import PREF from "./loadPref";

export default function updateUnit() {
  changeUnit();

  const values = document.querySelectorAll(".value");
  const temps = [];
  for (let n of values) {
    if (n.dataset.type == "temp") {
      temps.push(n);
    }
  }
  if (PREF.unit == "imperial") {
    for (let n of temps) {
      n.innerHTML = n.dataset.tempF;
    }
  } else {
    for (let n of temps) {
      n.innerHTML = n.dataset.tempC;
    }
  }
}

function changeUnit() {
  const units = document.querySelectorAll(".unit");
  const temps = [];
  for (let n of units) {
    if (n.dataset.type == "temp") {
      temps.push(n);
    }
  }

  if (PREF.unit == "imperial") {
    for (let n of temps) {
      n.innerHTML = "F";
    }
  } else {
    for (let n of temps) {
      n.innerHTML = "C";
    }
  }
}
