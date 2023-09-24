import updateLocale from "./updateLocale";
import updateWeatherBody from "./updateWeatherBody";
import updateWeatherMisc from "./updateWeatherMisc";

function updateWeather(data) {
  updateLocale(data);
  updateWeatherBody(data);
  updateWeatherMisc(data);
}
export default updateWeather;
