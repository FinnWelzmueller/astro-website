class PageHandler {
  constructor() {
    this.colorSwitchButtons = document.querySelectorAll(".colorSwitch");
    this.setThemeIcon();

    this.colorSwitchButtons.forEach((btn) =>
      btn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        this.setThemeIcon();
      })
    );
  }

  setThemeIcon() {
    const isDark = document.documentElement.classList.contains("dark");
    this.colorSwitchButtons.forEach((btn) => {
      btn.innerHTML = `
        <img src="/icons/${isDark ? "sun" : "moon"}.svg" alt="${isDark ? "sun" : "moon"}" class="w-6 h-6" />
      `;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => new PageHandler());
