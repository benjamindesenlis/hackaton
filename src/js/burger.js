const burgerBtn = document.getElementById("burger");
const menuBurger = document.getElementById("menuBurger");
const burgerClose = document.getElementById("burgerClose");
const burgerOpen = document.getElementById("burgerOpen");

const links = document.querySelectorAll(".menuLink");


function toggleMenu() {
  menuBurger.classList.toggle("hiddenMenu");
  burgerOpen.classList.toggle("hidden");
  burgerClose.classList.toggle("hidden");
}

burgerBtn.addEventListener("click", () => {
  toggleMenu();
});


links.forEach(link => {
  link.addEventListener("click", toggleMenu);
});