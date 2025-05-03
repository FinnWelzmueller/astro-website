class PageHandler {
    constructor() {
      this.setThemeIcon();
      document.querySelector("#colorSwitch")?.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        this.setThemeIcon();
      });
    }
  
    setThemeIcon() {
      const colorSwitch = document.querySelector("#colorSwitch");
      if (!colorSwitch) return;
      const isDark = document.documentElement.classList.contains("dark");
      colorSwitch.innerHTML = `
        <img src="/icons/${isDark ? "sun" : "moon"}.svg" alt="${isDark ? "sun" : "moon"}" class="w-6 h-6" />
      `;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => new PageHandler());
  