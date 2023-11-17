import tempFtoC from "./tempFtoC";
import setValue from "./setValue";
export default function updateTemp(dom, temp) {
  dom.dataset.imp = `${temp}ºF`;
  dom.dataset.met = `${tempFtoC(temp)}ºC`;
  setValue(dom);
}
