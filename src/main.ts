import "./styles/main.scss";
import "./scripts/lazy.js";

let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  header.classList.toggle('menu-open');
}