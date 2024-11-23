const logo = document.getElementById("logo");
const menuMobileButton = document.getElementById("menu-hambuger");
const menuMobile = document.getElementById("menu-mobile");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let isOpen = false;

document.getElementById("logo").addEventListener("click", () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
})

menuMobileButton.addEventListener("click", () => {
  if(!isOpen) {

    menuMobile.style.animation = "openMenu 0.5s ease-in normal";
    menuMobile.style.right = "0";

    line2.style.display = "none";
    line1.style.width = "50px";
    line3.style.width = "50px";
    line1.style.transform = "rotate(45deg)";
    line3.style.transform = "rotate(-45deg) translate(3px, -3px)"
  } else {
    menuMobile.style.animation = "closeMenu 0.5s ease-in normal";
    menuMobile.style.right = "-100vw";

    line2.style.display = "block";
    line1.style.width = "40px";
    line3.style.width = "30px";
    line1.style.transform = "rotate(0)";
    line3.style.transform = "rotate(0) translate(0, 0)"
  }

  isOpen = !isOpen;
})