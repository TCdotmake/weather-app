export default function mkLeftIcon() {
  const leftArrowIcon = document.createElement("div");
  leftArrowIcon.classList.add("icon");
  leftArrowIcon.innerHTML = `<svg fill="#000000" width="64px" height="64px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>left</title> <path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path> </g></svg>`;
  return leftArrowIcon;
}
