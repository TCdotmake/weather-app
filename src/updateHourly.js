import PREF from "./loadPref";
import tempFtoC from "./tempFtoC";
import updateTemp from "./updateTemp";

export default function updateHourly(data) {
  console.log("from updateHourly");
  const dayArr = data.forecast.forecastday;
  const maxPercent = 90;
  const minPercent = 35;
  const rangePercent = maxPercent - minPercent;
  const heightArr = [];
  const graphArr = ["g1", "g2", "g3"];
  for (let index in dayArr) {
    //calculate height for bars
    const tempArr = [];
    for (let n of dayArr[index].hour) {
      tempArr.push(n.temp_f);
    }
    const max = Math.max(...tempArr);
    const min = Math.min(...tempArr);
    const range = max - min;
    for (let temp of tempArr) {
      const height = Math.round(
        (rangePercent * (temp - min)) / range + minPercent
      );
      heightArr.push(height);
    }
    //update text for min and max
    const name = graphArr[index];
    const hiDOM = document.getElementById(`${name}-hi-val`);
    const lowDOM = document.getElementById(`${name}-low-val`);
    // hiDOM.dataset.imp = `${max}ºF`;
    // hiDOM.dataset.met = `${tempFtoC(max)}ºC`;
    // if (PREF.unit == "imperial") {
    //   hiDOM.innerHTML = hiDOM.dataset.imp;
    // } else {
    //   hiDOM.innerHTML = hiDOM.dataset.met;
    // }
    // lowDOM.dataset.imp = `${min}ºF`;
    // lowDOM.dataset.met = `${tempFtoC(min)}ºC`;
    // if (PREF.unit == "imperial") {
    //   lowDOM.innerHTML = lowDOM.dataset.imp;
    // } else {
    //   lowDOM.innerHTML = lowDOM.dataset.met;
    // }
    updateTemp(hiDOM, max);
    updateTemp(lowDOM, min);
    //update date
    const dateArr = dayArr[index].date.split("-");
    dateArr[1] -= 1;
    const date = new Date(...dateArr);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    document.getElementById(`${name}-date`).innerHTML = `${month} ${day}`;
  }
  const barArr = document.querySelectorAll(".graph-bar");
  for (let i = 0; i < heightArr.length; i++) {
    barArr[i].style.height = `${heightArr[i]}%`;
  }
}
