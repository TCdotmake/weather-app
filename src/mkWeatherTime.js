function mkWeatherTime(epoch) {
  const date = new Date(epoch * 1000);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  let hour = Number(date.getHours());
  let suffix = "AM";
  if (hour >= 12) {
    suffix = "PM";
    hour = hour % 12;
    if (hour == 0) {
      hour = 12;
    }
  }
  let min = date.getMinutes();
  if (min.length < 2) {
    min = `0${min}`;
  }
  const str = `${month} ${day}, ${hour}:${min}${suffix}`;
  return str;
}

export default mkWeatherTime;
