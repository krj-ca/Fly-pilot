
import { showScreen } from "./navigation.js";

const screen = document.getElementById("screen");

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    const destination = button.dataset.screen;
    showScreen(destination, screen);
  });
});

console.log("Air-fly simulator initialized.");
