// Alternar Tema com ícone
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
    } else {
        themeIcon.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
    }
});

// Modal de boas-vindas
const modal = new bootstrap.Modal(document.getElementById("welcomeModal"));
window.addEventListener("load", () => {
    setTimeout(() => modal.show(), 600);
});

// Carrossel automático com rolagem suave
const carousel = document.querySelector("#carouselExampleIndicators");
if (carousel) {
    new bootstrap.Carousel(carousel, {
        interval: 6500,
        ride: "carousel",
        pause: false,
        wrap: true,
    });
}
