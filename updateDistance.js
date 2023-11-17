import mileToKM from "./mileToKM";
import setValue from "./src/setValue";

export default function updateDistance(dom, miles) {
  dom.dataset.imp = `${miles} mi`;
  dom.dataset.met = `${mileToKM(miles)} km`;
  setValue(dom);
}
