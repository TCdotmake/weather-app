const KEY = "7f0edffd3b414928994130843231809";
const BASE = "https://api.weatherapi.com/v1/forecast.json";
const MID = `?key=${KEY}&q=`;
const OPTION = "&days=3";

function handleError(err) {
  console.log("here err");
  console.log(err);
}

async function getData(query) {
  try {
    const url = BASE + MID + query + OPTION;
    const res = await fetch(url, { mode: "cors" });
    return await res.json();
  } catch (err) {
    handleError(err);
  }
}

export default getData;
