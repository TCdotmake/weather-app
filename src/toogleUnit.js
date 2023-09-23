import PREF from "./loadPref";
import localSave from "./localSave";
import updateUnit from "./updateUnit";
export default function toggleUnit() {
  if (PREF.unit == "imperial") {
    PREF.unit = "metric";
  } else {
    PREF.unit = "imperial";
  }
  localSave("tcdotmakeWatherApp", PREF);

  updateUnit();
}
