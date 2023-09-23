import style from "./style.css";

import getData from "./getData";
import searchIcon from "./searchIcon";
import mkWeather from "./mkWeather";

const body = document.body;

getData("sarasota")
  .then((data) => mkWeather(data, "current"))
  .then((element) => {
    body.appendChild(element);
  });
