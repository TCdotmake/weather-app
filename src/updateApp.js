import PREF from "./loadPref";
import getData from "./getData";
import updateWeather from "./updateWeather";
export default function updateApp(query) {
  if (query == null) {
    query = "Sarasota";
  }
  getData(query).then((data) => {
    console.log(data);
    (async () => {
      updateWeather(await data);
    })();
  });
}
