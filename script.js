document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.getElementById("toggleTheme");

    toggleThemeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const menuNav = document.getElementById("menuNav");

    menuToggle.addEventListener("click", function() {
        menuNav.classList.toggle("active");
    });
});
