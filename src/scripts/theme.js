import { applyInputRangeStyle } from "./inputRange.js";

export function theme() {
  /* Verifica se há um tema salvo */
  const theme = localStorage.getItem("openMusicTheme");
  const elementos = document.querySelectorAll("[data-theme]");

  if (theme === "dark") {
    elementos.forEach((elemento) => elemento.classList.add("darkMode"));
  }

  /* Adiciona a seleção de tema ao botão */
  const themeButton = document.querySelector("header button");
  themeButton.addEventListener("click", () => {
    const theme = localStorage.getItem("openMusicTheme");
    if (theme != "dark") {
      localStorage.setItem("openMusicTheme", "dark");
      elementos.forEach((elemento) => elemento.classList.toggle("darkMode"));
    } else {
      localStorage.setItem("openMusicTheme", "light");
      elementos.forEach((elemento) => elemento.classList.toggle("darkMode"));
    }
    applyInputRangeStyle()

  });
}
