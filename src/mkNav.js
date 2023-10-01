export default function mkNav() {
  const items = ["Locale", "Forecast", "Hourly"];
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const navUL = document.createElement("ul");
  for (let n of items) {
    const li = document.createElement("li");
    li.innerHTML = n;
    navUL.appendChild(li);
  }
  nav.appendChild(navUL);
  return nav;
}
