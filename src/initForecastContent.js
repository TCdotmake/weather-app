export default function initForecastContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.id = "forecast";

  const arr = ["Today", "Tomorrow", "After"];

  for (let item of arr) {
    const card = document.createElement("div");
    card.classList = "forecast-card";
    const title = document.createElement("h3");
    title.innerHTML = item;
    title.classList.add("forecast-day");
    const img = new Image();
    img.classList.add("forecast-icon");
    const desc = document.createElement("p");
    desc.classList.add("forecast-desc");
    const temp = document.createElement("h3");
    temp.classList.add("forecast-temp");
    temp.classList.add("value");
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(desc);
    card.appendChild(temp);
    content.appendChild(card);
  }

  return content;
}
