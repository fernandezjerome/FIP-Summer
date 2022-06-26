const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visiblity = primaryNav.getAttribute("data-visible");

  console.log(visiblity);

  if (visiblity === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expandes", true);
  } else if (visiblity === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expandes", false);
  }
});
