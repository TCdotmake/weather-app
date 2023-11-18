import directionIcon from "./icons/directionIcon";
import humidityIcon from "./icons/humidityIcon";
import uvIcon from "./icons/uvIcon";
import visibilityIcon from "./icons/visibilityIcon";
import windIcon from "./icons/windIcon";
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
  const fields = ["humidity", "direction", "wind", "visibility", "uv"];
  const isval = [0, 0, 1, 1, 0];
  for (let index in fields) {
    const item = fields[index];
    const label = document.createElement("div");
    label.classList.add("misc-icon-container");
    const value = document.createElement("p");
    value.id = `main-${item}`;
    if (isval[index]) {
      value.classList.add("value");
    }
    value.innerHTML = item;
    misc.append(label, value);
  }
  misc.children[0].append(humidityIcon);
  misc.children[2].append(directionIcon);
  misc.children[4].append(windIcon);
  misc.children[6].append(visibilityIcon);
  misc.children[8].append(uvIcon);
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

  const feeldiv = document.createElement("div");
  feeldiv.classList.add("main-temp-div");
  feeldiv.classList.add("feel-text");
  const feeltext = document.createElement("span");
  feeltext.innerHTML = "Feels like";
  const feeltemp = document.createElement("span");
  feeltemp.id = "feel-temp";
  feeltemp.innerHTML = "temp";
  feeltemp.classList.add("value");
  feeltemp.classList.add("temp");
  feeldiv.append(feeltext, feeltemp);
  forecast.append(icon, desc, tempDiv, feeldiv);

  return forecast;
}
