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
         <a class="country" href="#id">
         <img src="${country.img}" alt="" class="country__img">
         <div class="country__data">
            <h2 class="country__name">${country.name}</h2>
            <p class="country__row">Capital: ${country.capital}.</p>
            <p class="country__row">Population: ${country.population}</p>
            <p class="country__row">Region: ${country.region}</p>
            <p class="country__row">Languages: ${country.languages.join(
              ", "
            )}</p>
         </div>
      </a>
      `;
  }
}

export default new CountriesView();
