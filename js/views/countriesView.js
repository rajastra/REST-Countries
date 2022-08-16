import View from "./View.js";

class CountriesView extends View {
  _parentElement = document.querySelector(".countries");
  //   _errorMessage = "We could not find that recipe. Please try another one!";
  //   _message = ``;

  _generateMarkup() {
    return this._data
      .map((country) => this._getCountryMarkup(country))
      .join("");
  }

  _getCountryMarkup(country) {
    return `
         <a class="country" href="#${country.name}">
         <img src="${country.img}" alt="" class="country__img">
         <div class="country__data">
            <h2 class="country__name">${country.name}</h2>
            <p class="country__row"><span class="font-bold">Capital:</span>  ${
              country.capital
            }.</p>
            <p class="country__row"><span class="font-bold">Population:</span> ${
              country.population
            }</p>
            <p class="country__row"><span class="font-bold">Region:</span> ${
              country.region
            }</p>
            <p class="country__row"><span class="font-bold">Languages:</span> ${country.languages.join(
              ", "
            )}</p>
         </div>
      </a>
      `;
  }
}

export default new CountriesView();
