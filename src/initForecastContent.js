import mkRainIcon from "./icons/mkRainIcon";
import mkSnowIcon from "./icons/mkSnowIcon";

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

    const raindiv = document.createElement("div");
    raindiv.classList.add("chance-div");
    const rainchance = document.createElement("span");
    rainchance.classList.add("rain-chance");
    rainchance.innerHTML = "0%";
    raindiv.append(mkRainIcon(), rainchance);

    const snowdiv = document.createElement("div");
    snowdiv.classList.add("chance-div");
    const snowchance = document.createElement("span");
    snowchance.classList.add("snow-chance");
    snowchance.innerHTML = "0%";
    snowdiv.append(mkSnowIcon(), snowchance);

    card.append(title, img, temp, raindiv, snowdiv);
    bg.appendChild(card);
  }
  content.append(bg);
  return content;
}
