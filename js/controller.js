import * as model from "./model.js";
import countriesView from "./views/countriesView.js";
import filterView from "./views/filterView.js";
import { FilterData } from "./views/filterData.js";
import contryView from "./views/countryView.js";
import countryView from "./views/countryView.js";
import backButtonView from "./views/backButtonView.js";

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

const controlCountry = async function () {
  const capital = window.location.hash.slice(1);
  if (!capital) return;
  await model.getCountry(capital);
  backButtonView.renderButton();
  console.log(model.state.country);
  contryView.render(model.state.country);
};

const controlCountries = async function () {
  filterView.render(model.state.regions);
  await model.getCountries(model.state.region);
  countriesView.render(model.state.countries);
};

const controlFilter = async function () {
  const filter = new FilterData();
  await model.getCountries(filter.getRegion());
  countriesView.render(model.state.countries);
};

const controlBack = function () {
  filterView.render(model.state.regions);
  window.location.hash = "";
  countriesView.render(model.state.countries);
};

const init = function () {
  changeTheme();
  controlCountries();
  const filter = new FilterData();
  filter.addHandlersFilter(controlFilter);
  countryView.addHandlerCountry(controlCountry);
  backButtonView.addHandlerBack(controlBack);
};

init();
