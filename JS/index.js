document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".navigation-bar").classList.toggle("active");
});

document.querySelector(".navigation-bar-menu-X").addEventListener("click", () => {
    document.querySelector(".navigation-bar").classList.remove("active");
});