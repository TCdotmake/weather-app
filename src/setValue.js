import PREF from "./loadPref";
export default function setValue(dom) {
  if (PREF.unit == "imperial") {
    dom.innerHTML = dom.dataset.imp;
  } else {
    dom.innerHTML = dom.dataset.met;
  }
}
