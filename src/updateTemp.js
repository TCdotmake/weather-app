import tempFtoC from "./tempFtoC";
import PREF from "./loadPref";
export default function updateTemp(dom, temp) {
  dom.dataset.imp = `${temp}ºF`;
  dom.dataset.met = `${tempFtoC(temp)}ºC`;
  if (PREF.unit == "imperial") {
    dom.innerHTML = dom.dataset.imp;
  } else {
    dom.innerHTML = dom.dataset.met;
  }
}
