import PREF from "./loadPref";
import localSave from "./localSave";
export default function toggleUnit() {
  if (PREF.unit == "imperial") {
    PREF.unit = "metric";
  } else {
    PREF.unit = "imperial";
  }
  localSave("tcdotmakeWatherApp", PREF);
}
