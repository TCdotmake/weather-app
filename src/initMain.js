import searchIcon from "./searchIcon";
export default function initMain() {
  const main = document.createElement("section");
  main.classList.add("section-container");
  main.classList.add("main");
  const names = ["header", "time", "misc", "forecast"];
  const doms = [mkHeader(), mkTime(), mkMisc(), mkForecast()];
  for (let index in names) {
    const dom = doms[index];
    const name = names[index];
    dom.id = `main-${name}`;
    dom.classList.add("main-element");
    main.append(dom);
  }

  return main;
}

function mkHeader() {
  const header = document.createElement("div");
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("query-input");
  const queryInput = document.createElement("input");
  queryInput.setAttribute("type", "text");
  queryInput.setAttribute("placeHolder", "Search Location...");
  queryInput.id = "queryInput";
  searchIcon.id = "searchIcon";
  inputDiv.append(queryInput, searchIcon);
  const title = document.createElement("p");
  title.innerHTML = "Weather App";
  header.append(title, inputDiv);
  return header;
}

function mkTime() {
  const time = document.createElement("div");
  //...
  const label = document.createElement("p");
  label.innerHTML = "Last updated";
  const monthDay = document.createElement("p");
  monthDay.id = "main-day";

  monthDay.innerHTML = "November, 15";
  const hourMin = document.createElement("p");
  hourMin.id = "main-hour";
  hourMin.innerHTML = "9:25 PM";
  time.append(monthDay, hourMin);

  return time;
}

function mkMisc() {
  const misc = document.createElement("div");
  //...
  return misc;
}

function mkForecast() {
  const forecast = document.createElement("div");

  const icon = new Image();
  icon.id = "main-icon";
  const desc = document.createElement("h2");
  desc.id = "main-desc";

  const tempDiv = document.createElement("div");
  tempDiv.classList.add("main-temp-div");
  const unit = document.createElement("p");
  unit.classList.add("unit");
  unit.dataset.imp = "ºF";
  unit.dataset.met = "ºC";
  unit.dataset.type = "temp";
  const temp = document.createElement("h1");
  temp.classList.add("value");
  temp.id = "main-temp";
  tempDiv.append(temp, unit);

  forecast.append(icon, desc, tempDiv);

  return forecast;
}
