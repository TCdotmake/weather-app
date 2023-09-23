import updateLocale from "./updateLocale";
import updateWeatherBody from "./updateWeatherBody";

function updateWeather(data) {
  updateLocale(data);
  updateWeatherBody(data);
}
export default updateWeather;
