import mileToKM from "../mileToKM";
import setValue from "./setValue";

export default function updateWind(dom, data) {
  const direction = data.current.wind_dir;
  const speed = data.current.wind_mph;
  dom.dataset.imp = `${direction} ${speed} MPH`;
  dom.dataset.met = `${direction} ${mileToKM(speed)} KPH`;
  setValue(dom);
}
