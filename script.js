const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    root.classList.add("light");
    themeToggle.textContent = "☾";
} else
    themeToggle.textContent = "☀";

themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");

    const isLight = root.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    themeToggle.textContent = isLight ? "☾" : "☀";
});

document.getElementById("year").textContent = new Date().getFullYear();