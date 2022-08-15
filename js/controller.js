import * as model from "./model.js";
import countriesView from "./views/countriesView.js";

const changeTheme = function () {
  const toggle = document.querySelector(".dark-mode");
  const storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  const textMode = document.querySelector(".mode");
  textMode.textContent = storedTheme === "dark" ? "Light" : "Dark";

  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  }
  const switchTheme = function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    textMode.textContent = "Dark";

    if (currentTheme === "light") {
      targetTheme = "dark";
      textMode.textContent = "Light";
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  };

  toggle.addEventListener("click", switchTheme);
};

const controlCountries = async function () {
  await model.getCountries();
  countriesView.render(model.state.countries);
};

const init = function () {
  changeTheme();
  controlCountries();
};

init();
