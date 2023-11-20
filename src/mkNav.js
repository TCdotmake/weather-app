export default function mkNav() {
  const items = ["locale", "forecast", "hourly"];
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const navUL = document.createElement("ul");
  for (let n of items) {
    const li = document.createElement("li");
    li.innerHTML = n;
    li.id = `${n}-btn`;
    li.dataset.dest = `${n}`;
    navUL.appendChild(li);
    li.addEventListener("click", (e) => {
      const arr = document.querySelectorAll(".selected");
      for (let n of arr) {
        n.classList.remove("selected");
      }
      e.target.classList.add("selected");
      const options = document.querySelectorAll(".content");
      for (let n of options) {
        n.style.display = "none";
      }
      const display = document.getElementById(e.target.dataset.dest);
      display.style.display = "flex";
    });
  }
  nav.appendChild(navUL);
  return nav;
}
