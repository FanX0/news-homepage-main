document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("nav-toggle");
  const icon = document.getElementById("nav-side-img");
  const menu = document.getElementById("site-nav");

  const OPEN = "./assets/images/icon-menu-close.svg";
  const CLOSED = "./assets/images/icon-menu.svg";

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
    icon.src = isOpen ? CLOSED : OPEN;
    icon.style.width = isOpen ? "3rem" : "1.5rem";
  });
});
