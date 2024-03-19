export function mobileMenu() {
  let block = document.querySelector("header.header");

  if (block) {
    const body = document.querySelector("body");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("is-active");
      body.classList.toggle("scroll-lock");
    });
  }
}
