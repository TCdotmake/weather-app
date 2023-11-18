import mileToKM from "../mileToKM";
import setValue from "./setValue";

export default function updateWind(dom, data) {
  const speed = data.current.wind_mph;
  dom.dataset.imp = `${speed} MPH`;
  dom.dataset.met = `${mileToKM(speed)} KPH`;
  setValue(dom);
}
