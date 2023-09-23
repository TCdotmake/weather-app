function mkWeatherTime(obj) {
  let hourly = true;
  let date = new Date();
  if (obj.last_updated_epoch) {
    date = new Date(obj.last_updated_epoch * 1000);
  } else if (obj.time_epoch) {
    date = new Date(obj.time_epoch * 1000);
  }
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  let str = `${month} ${day}`;

  if (hourly) {
    let hour = Number(date.getHours());
    let suffix = "AM";
    if (hour > 12) {
      suffix = "PM";
      hour = hour % 12;
    }
    const min = date.getMinutes();
    str = str + `, ${hour}:${min} ${suffix}`;
  }

  const localTime = document.createElement("h3");
  localTime.innerHTML = str;

  return localTime;
}

export default mkWeatherTime;
