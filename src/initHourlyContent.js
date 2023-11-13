import mkDotIcon from "./mkDotIcon";
import mkLeftIcon from "./mkLeftIcon";
import mkRightIcon from "./mkRightIcon";

export default function initHourlyContent() {
  const content = document.createElement("div");
  content.id = "hourly-content";

  //graphs
  addGraphs(content);

  //graph nav
  const graphNav = document.createElement("nav");
  graphNav.id = "graph-nav";
  const ul = document.createElement("ul");
  const d1 = document.createElement("li");
  const d2 = document.createElement("li");
  const d3 = document.createElement("li");
  const left = document.createElement("li");
  const right = document.createElement("li");
  const la = mkLeftIcon();
  la.classList.add("arrow");
  const ra = mkRightIcon();
  ra.classList.add("arrow");
  left.appendChild(la);
  right.appendChild(ra);
  const arr = [d1, d2, d3];
  for (let item of arr) {
    const dot = mkDotIcon();
    dot.classList.add("dot");
    item.appendChild(dot);
  }
  ul.append(left, d1, d2, d3, right);
  graphNav.appendChild(ul);

  content.appendChild(graphNav);

  return content;
}
function addGraphs(content) {
  const g1 = mkGraph("g1");
  const g2 = mkGraph("g2");
  const g3 = mkGraph("g3");
  content.append(g1, g2, g3);
}

function mkGraph(name) {
  const outline = document.createElement("div");
  outline.classList.add("outline");
  outline.classList.add(name);
  //graph
  const graph = document.createElement("div");
  graph.classList.add("graph");

  //graph info
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  graph.append(infoContainer);

  const date = document.createElement("p");
  date.id = `${name}-date`;
  date.innerHTML = "DATE";
  const hiLabel = document.createElement("p");
  hiLabel.innerHTML = "High:";
  const lowLabel = document.createElement("p");
  lowLabel.innerHTML = "Low:";

  const hiVal = document.createElement("p");
  hiVal.id = `${name}-hi-val`;
  const lowVal = document.createElement("p");
  lowVal.id = `${name}-low-val`;
  hiVal.classList.add("value");
  lowVal.classList.add("value");
  hiVal.innerHTML = "75ºF";
  lowVal.innerHTML = "75ºF";

  infoContainer.append(date, hiLabel, hiVal, lowLabel, lowVal);

  //bars
  const barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");
  for (let i = 0; i < 24; i++) {
    barContainer.appendChild(mkBarDiv());
  }
  graph.appendChild(barContainer);

  outline.appendChild(graph);
  return outline;
}

function mkBarDiv() {
  const barDiv = document.createElement("div");
  barDiv.classList.add("bar-div");

  const bar = document.createElement("div");
  bar.classList.add("graph-bar");
  barDiv.appendChild(bar);

  return barDiv;
}
