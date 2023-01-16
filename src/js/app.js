const menuButton = document.querySelector(".main-header__menu-button");
const menu = document.querySelector(".main-header__nav");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("main-header__nav--hide");
});
