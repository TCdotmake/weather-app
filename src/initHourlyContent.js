export default function initHourlyContent() {
  const content = document.createElement("div");
  content.id = "hourly-content";

  //outline
  const outline = document.createElement("div");
  outline.classList.add("outline");
  content.appendChild(outline);

  //graph
  const graph = document.createElement("div");
  graph.classList.add("graph");
  outline.appendChild(graph);

  //ylabel
  const ylabel = document.createElement("div");
  ylabel.classList.add("ylabel");
  const max = document.createElement("p");
  const min = document.createElement("p");
  max.innerHTML = "Max";
  min.innerHTML = "Min";
  ylabel.appendChild(max);
  ylabel.appendChild(min);
  graph.appendChild(ylabel);

  for (let i = 0; i < 8; i++) {
    graph.appendChild(mkBarDiv());
  }

  const barArr = document.querySelectorAll(".graph-bar");
  console.log("barArr");
  console.log(barArr);
  let counter = 10;
  for (let item of barArr) {
    item.style.height = `${counter}%`;
    counter += 10;
  }

  return content;
}
function mkBarDiv() {
  const barDiv = document.createElement("div");
  barDiv.classList.add("bar-div");

  const bar = document.createElement("div");
  bar.classList.add("graph-bar");
  barDiv.appendChild(bar);

  return barDiv;
}
