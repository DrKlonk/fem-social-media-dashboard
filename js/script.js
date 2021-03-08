const toggle = document.querySelector(".toggle__input");
const defaultTheme = "dark";

function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

toggle.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : defaultTheme;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    toggle.checked = false;
  }
}
