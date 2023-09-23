import localSave from "./localSave";
import localLoad from "./localLoad";

function initPref() {
  const data = { unit: "imperial" };
  localSave("tcdotmakeWatherApp", data);
  return data;
}

const PREF = localLoad("tcdotmakeWatherApp") || initPref();
export default PREF;
