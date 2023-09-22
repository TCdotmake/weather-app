import style from "./style.css";

import getData from "./getData";

const body = document.body;
const title = document.createElement("h1");
title.innerHTML = "test";
body.appendChild(title);

(async () => {
  const data = await getData("sarasota");
  console.log(data);
})();
