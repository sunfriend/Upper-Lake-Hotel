import "./styles/main.scss";
import "./scripts/lazy.js";

let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

window.addEventListener("scroll", function() {
  let windowPosition = this.window.scrollY > 0;
  header.classList.toggle("active", this.window.scrollY > 0);
});

hamburgerMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  header.classList.toggle('menu-open');
}