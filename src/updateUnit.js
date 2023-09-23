import PREF from "./loadPref";

export default function updateUnit() {
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
