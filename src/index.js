import style from "./style.css";

import initPage from "./initPage";

initPage();

const barArr = document.querySelectorAll(".graph-bar");
let counter = 10;
for (let item of barArr) {
  item.style.height = `${counter}%`;
  counter += 5;
}
