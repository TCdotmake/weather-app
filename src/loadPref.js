import localSave from "./localSave";
import localLoad from "./localLoad";

function initPref() {
  const data = {
    unit: "imperial",
    weatherView: "current",
  };
  localSave("tcdotmakeWatherApp", data);
  return data;
}

let PREF = localLoad("tcdotmakeWatherApp") || initPref();
PREF = {
  ...PREF,
  setData(data) {
    this.data = structuredClone(data);
    console.log("data from PREF");
    console.log(this.data);
  },
};
export default PREF;
