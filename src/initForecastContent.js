export default function initForecastContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.id = "forecast";

  const arr = ["Today", "Tomorrow", "After"];
  const bg = document.createElement("div");
  bg.classList.add("forecast-bg");
  for (let item of arr) {
    const card = document.createElement("div");
    card.classList = "forecast-card";
    const title = document.createElement("h3");
    title.innerHTML = item;
    title.classList.add("forecast-day");
    const img = new Image();
    img.classList.add("forecast-icon");
    const temp = document.createElement("h3");
    temp.classList.add("forecast-temp");
    temp.classList.add("value");
    card.append(title, img, temp);
    bg.appendChild(card);
  }
  content.append(bg);
  return content;
}
