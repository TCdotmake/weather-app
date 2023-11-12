export default function updateHourly(data) {
  console.log("from updateHourly");
  const dayArr = data.forecast.forecastday;
  const maxPercent = 95;
  const minPercent = 40;
  const rangePercent = maxPercent - minPercent;
  const heightArr = [];
  for (let day of dayArr) {
    const tempArr = [];
    for (let n of day.hour) {
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
  }
  console.log(heightArr);
  const barArr = document.querySelectorAll(".graph-bar");
  for (let i = 0; i < barArr.length; i++) {
    barArr[i].style.height = `${heightArr[i]}%`;
  }
}
