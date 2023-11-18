export default function updateLocale(data) {
  let cities = document.querySelectorAll(".city");
  for (let city of cities) {
    city.innerHTML = data.location.name;
  }
  let regions = document.querySelectorAll(".region-info");
  for (let n of regions) {
    n.innerHTML = `${data.location.region}, ${data.location.country}`;
  }
  document.getElementById("lat").innerHTML = `Lat: ${data.location.lat}`;
  document.getElementById("long").innerHTML = `Long: ${data.location.lon}`;
}
