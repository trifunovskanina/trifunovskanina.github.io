const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const header = document.querySelector(".site-header");

function syncToggle() {
    const isLight = root.classList.contains("light");
    themeToggle.textContent = isLight ? "☾" : "☀";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

syncToggle();

themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");
    try {
        localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
    } catch (e) {
    }
    syncToggle();
});

function syncHeaderHeight() {
    root.style.setProperty("--header-h", header.offsetHeight + "px");
}

syncHeaderHeight();
if ("ResizeObserver" in window) {
    new ResizeObserver(syncHeaderHeight).observe(header);
} else {
    window.addEventListener("resize", syncHeaderHeight);
}

document.getElementById("year").textContent = new Date().getFullYear();
