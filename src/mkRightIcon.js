export default function mkRightIcon() {
  const rightArrowIcon = document.createElement("div");
  rightArrowIcon.classList.add("icon");
  rightArrowIcon.innerHTML = `<svg fill="#000000" width="64px" height="64px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>right</title> <path d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"></path> </g></svg>`;
  return rightArrowIcon;
}
