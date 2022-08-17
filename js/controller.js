import * as model from "./model.js";
import countriesView from "./views/countriesView.js";
import filterView from "./views/filterView.js";
import { FilterData } from "./views/filterData.js";
import contryView from "./views/countryView.js";
import countryView from "./views/countryView.js";
import backButtonView from "./views/backButtonView.js";
import searchView from "./views/searchView.js";

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
  try {
    const capital = window.location.hash.slice(1);
    if (!capital) return;
    contryView.renderSpinner();
    await model.getCountry(capital);
    backButtonView.renderButton();
    contryView.render(model.state.country);
  } catch (error) {
    console.log(error);
  }
};

const controlCountries = async function () {
  try {
    countriesView.renderSpinner();
    filterView.removeHidden();
    await model.getCountries(model.state.region);
    countriesView.render(model.state.countries);
  } catch (error) {
    console.log(error);
  }
};

const controlFilter = async function () {
  try {
    countriesView.renderSpinner();
    const filter = new FilterData();
    model.changeRegion(filter.getRegion());
    filterView.removeHidden();
    await model.getCountries(filter.getRegion());
    countriesView.render(model.state.countries);
  } catch (error) {
    console.log(error);
  }
};

const controlBack = function () {
  window.location.hash = "";
  countriesView.renderSpinner();
  filterView.removeHidden();
  countriesView.render(model.state.countries);
};

const controlSearch = async function () {
  try {
    countriesView.renderSpinner();
    const query = searchView.getQuery();
    console.log(query);
    if (!query) return;
    await model.getSearchResult(query);
    countriesView.render(model.state.search.results);
  } catch (error) {
    countriesView.renderError("cannot find country");
  }
};

const init = function () {
  changeTheme();
  window.addEventListener("load", controlCountries);
  const filter = new FilterData();
  filter.addHandlersFilter(controlFilter);
  countryView.addHandlerCountry(controlCountry);
  backButtonView.addHandlerBack(controlBack);
  searchView.addHandlerSearch(controlSearch);
};

init();
