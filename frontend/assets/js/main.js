
document.addEventListener("DOMContentLoaded", () => {

  const paginaActual = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navbar-huerto .nav-link").forEach((link) => {
    if (link.getAttribute("href") === paginaActual) {
      link.classList.add("active");
    }
  });
});
