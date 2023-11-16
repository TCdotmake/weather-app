export default function updateMain(data) {
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
