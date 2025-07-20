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
    this.typeWriterManager();
  }

  setThemeIcon() {
    const isDark = document.documentElement.classList.contains("dark");
    this.colorSwitchButtons.forEach((btn) => {
      btn.innerHTML = `
        <img src="/icons/${isDark ? "sun" : "moon"}.svg" alt="${isDark ? "sun" : "moon"}" class="w-6 h-6" />
      `;
    });
  }

  typeWriterManager() {
    let dynamicHeaderElement = document.querySelector("#typewriter")
    if (dynamicHeaderElement == null) return;

    let dynamicHeaderText = ["Finn", "a Physicist", "Finn", "a Space Nerd", "Finn", "a Science Fan", "Finn", "a Coding Guy"];
    
    let i = 0;
    let currentText = dynamicHeaderText[i];
    let currentWord = dynamicHeaderText[i];
    let isDeleting = false;

    let typeWriter = () => {
      currentWord = dynamicHeaderText[i];
      if(isDeleting){
        currentText = currentWord.substring(0, currentText.length - 1);
      }

      if(!isDeleting){
        currentText = currentWord.substring(0, currentText.length + 1);
      }
      dynamicHeaderElement.innerHTML = currentText;
      if(!isDeleting && currentText === currentWord){
        isDeleting = true;
        setTimeout(typeWriter, 4000);

      } else if (isDeleting && currentText === ""){
        isDeleting = false;
        i++;

        if(i === dynamicHeaderText.length){
          i = 0;
        }
        setTimeout(typeWriter, 500);
      } else {
        setTimeout(typeWriter, 100)
      }
    };
    typeWriter();
  }
}

document.addEventListener("DOMContentLoaded", () => new PageHandler());
