import * as model from "./model.js";
import countriesView from "./views/countriesView.js";
import filterView from "./views/filterView.js";
import { FilterData } from "./views/filterData.js";

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
  filterView.render(model.state.regions);
  const filter = new FilterData();
  await model.getCountries(filter.getRegion());
  countriesView.render(model.state.countries);
};

const controlFilter = async function () {
  const filter = new FilterData();
  await model.getCountries(filter.getRegion());
  countriesView.render(model.state.countries);
};

const init = function () {
  changeTheme();
  controlCountries();
  const filter = new FilterData();
  filter.addHandlersFilter(controlFilter);
};

init();
