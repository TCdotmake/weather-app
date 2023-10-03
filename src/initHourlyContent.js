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
  const y1 = "Max";
  const y2 = "Min";
  const g1 = mkGraph(y1, y2, "12AM", "7AM");
  g1.classList.add("g1");
  const g2 = mkGraph(y1, y2, "8AM", "3PM");
  g2.classList.add("g2");
  const g3 = mkGraph(y1, y2, "4PM", "11PM");
  g3.classList.add("g3");
  content.append(g1, g2, g3);
}

function mkGraph(y1, y2, x1, x2) {
  const outline = document.createElement("div");
  outline.classList.add("outline");

  //graph
  const graph = document.createElement("div");
  graph.classList.add("graph");

  //ylabel
  const ylabel = document.createElement("div");
  ylabel.classList.add("ylabel");
  const max = document.createElement("p");
  const min = document.createElement("p");
  max.innerHTML = y1;
  min.innerHTML = y2;
  ylabel.appendChild(max);
  ylabel.appendChild(min);
  graph.appendChild(ylabel);

  for (let i = 0; i < 8; i++) {
    graph.appendChild(mkBarDiv());
  }

  const xlabel1 = document.createElement("p");
  const xlabel2 = document.createElement("p");
  xlabel1.innerHTML = x1;
  xlabel1.classList.add("xlabel1");
  xlabel2.innerHTML = x2;
  xlabel2.classList.add("xlabel2");
  graph.appendChild(xlabel1);
  graph.appendChild(xlabel2);

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
