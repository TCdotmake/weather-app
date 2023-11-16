import PREF from "./loadPref";
export default function updateMain(data) {
  updateTime(data);
  updateWeather(data);
}
function updateWeather(data) {
  let source = data.current;
  document.getElementById("main-icon").src = source.condition.icon;
  document.getElementById("main-desc").innerHTML = source.condition.text;
  const mainTemp = document.getElementById("main-temp");
  mainTemp.dataset.met = source.temp_c;
  mainTemp.dataset.imp = source.temp_f;
  let temp;
  if (PREF.unit != "imperial") {
    temp = mainTemp.dataset.met;
  } else {
    temp = mainTemp.dataset.imp;
  }
  mainTemp.innerHTML = temp;
}

function updateTime(data) {
  const timeData = data.current.last_updated;
  const date = new Date(timeData);
  console.log(date);
  const month = date.toLocaleDateString("default", { month: "long" });
  const day = date.getDate();
  const daydom = document.getElementById("main-day");
  daydom.innerHTML = `${month} ${day}`;
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const timedom = document.getElementById("main-hour");
  timedom.innerHTML = time;
}
