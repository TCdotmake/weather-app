export default function initLocaleContent() {
  const content = document.createElement("div");

  //location info
  content.appendChild(initLocInfo());
  content.appendChild(initDailyInfo());
  content.appendChild(initAstro());

  return content;
}

function initAstro() {
  const astroDiv = document.createElement("div");
  astroDiv.classList.add("astro");
  const sunDiv = document.createElement("div");
  sunDiv.classList.add("astro-sub");
  const sunRise = document.createElement("p");
  sunRise.id = "sunrise";
  const sunSet = document.createElement("p");
  sunSet.id = "sunset";
  const moonDiv = document.createElement("div");
  moonDiv.classList.add("astro-sub");
  const moonRise = document.createElement("p");
  moonRise.id = "moonrise";
  const moonSet = document.createElement("p");
  moonSet.id = "moonset";
  sunDiv.appendChild(sunRise);
  sunDiv.appendChild(sunSet);
  moonDiv.appendChild(moonRise);
  moonDiv.appendChild(moonSet);
  astroDiv.appendChild(sunDiv);
  astroDiv.appendChild(moonDiv);
  return astroDiv;
}

function initDailyInfo() {
  const dailyInfoDiv = document.createElement("div");
  const date = document.createElement("h3");
  date.id = "locale-date";
  const avgTemp = document.createElement("p");
  avgTemp.id = "loc-avg-temp";
  avgTemp.classList.add("value");
  const avgHum = document.createElement("p");
  avgHum.id = "loc-avg-hum";
  const rainChance = document.createElement("p");
  rainChance.id = "rain-chance";
  const snowChance = document.createElement("p");
  snowChance.id = "snow-chance";
  dailyInfoDiv.appendChild(date);
  dailyInfoDiv.appendChild(avgTemp);
  dailyInfoDiv.appendChild(avgHum);
  dailyInfoDiv.appendChild(rainChance);
  dailyInfoDiv.appendChild(snowChance);
  return dailyInfoDiv;
}

function initLocInfo() {
  const locDiv = document.createElement("div");
  const name = document.createElement("h2");
  name.classList.add("city");
  const regionInfo = document.createElement("p");
  regionInfo.classList.add("region-info");
  const coorDiv = document.createElement("div");
  const lat = document.createElement("p");
  lat.id = "lat";
  const long = document.createElement("p");
  long.id = "long";
  coorDiv.appendChild(lat);
  coorDiv.appendChild(long);
  locDiv.appendChild(name);
  locDiv.appendChild(regionInfo);
  locDiv.appendChild(coorDiv);
  return locDiv;
}
