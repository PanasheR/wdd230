const modeButton = document.querySelector("#mode");
const main = document.querySelector("*");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☑️")) {
    main.style.background = "grey";
    main.style.color = "black";
    modeButton.textContent = "❎";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    modeButton.textContent = "☑️";
  }
});