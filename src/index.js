import style from "./style.css";

import getData from "./getData";
import searchIcon from "./searchIcon";
import mkWeather from "./mkWeather";

const body = document.body;
body.appendChild(mkWeather());

// (async () => {
//   const data = await getData("sarasota");
//   console.log(data);
// })();
