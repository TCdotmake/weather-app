import initWeather from "./initWeather";
import PREF from "./loadPref";
import togglePref from "./tooglePref";
export default function initPage() {
  const weather = initWeather();
  document.body.appendChild(weather);
  console.log(PREF);
  togglePref();
  console.log(PREF);
  togglePref();
  console.log(PREF);
}
