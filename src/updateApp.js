import PREF from "./loadPref";
import getData from "./getData";
import updateWeather from "./updateWeather";
import updateLocaleSection from "./updateLocaleSection";
import updateForecastSection from "./updateForecastSection";
import updateHourly from "./updateHourly";
import updateMain from "./updateMain";
export default function updateApp(query) {
  if (query == null) {
    query = "Sarasota";
  }
  getData(query).then((data) => {
    console.log(data);
    (async () => {
      updateMain(await data);
      updateWeather(await data);
      updateLocaleSection(await data.forecast.forecastday[0]);
      updateForecastSection(await data);
      updateHourly(await data);
      PREF.setData(await data);
    })();
  });
}
