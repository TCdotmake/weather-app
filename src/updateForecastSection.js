import PREF from "./loadPref";
export default function updateForecastSection(data) {
  updateDate(data);
  updateCondition(data);
  const tempArr = document.querySelectorAll(".forecast-temp");
  console.log(tempArr);
  const forecastArr = data.forecast.forecastday;
  for (let index in forecastArr) {
    const day = forecastArr[index].day;
    tempArr[index].dataset.imp = `${day.avgtemp_f}ºF`;
    tempArr[index].dataset.met = `${day.avgtemp_c}ºC`;
    if (PREF.unit == "imperial") {
      tempArr[index].innerHTML = tempArr[index].dataset.imp;
    } else {
      tempArr[index].innerHTML = tempArr[index].dataset.met;
    }
  }
}
function updateCondition(data) {
  const forecastArr = data.forecast.forecastday;
  const iconArr = document.querySelectorAll(".forecast-icon");
  // const descArr = document.querySelectorAll(".forecast-desc");
  for (let index in forecastArr) {
    const condition = forecastArr[index].day.condition;
    iconArr[index].src = condition.icon;
    // descArr[index].innerHTML = condition.text;
  }
}

function updateDate(data) {
  const days = document.querySelectorAll(".forecast-day");
  const forecastArr = data.forecast.forecastday;
  for (let i = 0; i < days.length; i++) {
    const dateArr = forecastArr[i].date.split("-");
    dateArr[1] -= 1;
    const date = new Date(...dateArr);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    days[i].innerHTML = `${month} ${day}`;
  }
  // const dateArr = forecastArr[2].date.split("-");
  // dateArr[1] -= 1;
  // const date = new Date(...dateArr);
  // const month = date.toLocaleString("default", { month: "short" });
  // const day = date.getDate();
  // document.getElementById("forecast-date").innerHTML = `${month} ${day}`;
}
