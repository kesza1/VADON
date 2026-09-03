import './style.css'

const themeLightBtn = document.querySelector('#themeLightBtn');
const themeDarkBtn = document.querySelector('#themeDarkBtn');

themeDarkBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dark");

  themeDarkBtn.classList.add("hidden");
  themeLightBtn.classList.remove("hidden");
});


themeLightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");

  themeLightBtn.classList.add("hidden");
  themeDarkBtn.classList.remove("hidden");
});
const menuBtn = document.getElementById("menuBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

menuBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");
});