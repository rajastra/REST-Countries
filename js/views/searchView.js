import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".countries");
  _errorMessage = "We could not find that Contry. Please try another one!";
  //   _message = ``;

  addHandlerCountry = (handler) => {
    window.addEventListener("hashchange", handler);
  };

  _generateMarkup() {
    return `
      <div class="details">
         <img src="${this._data.img}" alt="" class="details__img">
         <div class="details__info">
            <h2 class="details__title">${this._data.name}</h2>
            <div class="details__box">
               <div class="details__text-box">
                  <p class="details__text">Native Name : ${this._data.name}</p>
                  <p class="details__text">Population : ${
                    this._data.population
                  }</p>
                  <p class="details__text">region: ${this._data.region}</p>
                  <p class="details__text">Subregion: ${
                    this._data.subregion
                  }</p>
                  <p class="details__text">capital: ${this._data.capital}</p>
               </div>
               <div class="details__text-box">
                  <p class="details__text">Currencies : ${
                    this._data.currencies
                  }</p>
                  <p class="details__text">Language: ${this._data.languages.join(
                    ", "
                  )}</p>
               </div>
            </div>
            <div class="border">
               <p class="details__text">Border countries :</p>
               ${
                 this._data.borders
                   ? this._data.borders
                       .map((border) => {
                         return `
                   <div class="border__country">
                      <a href="#${border}" class="border__link">${border}</a>
                  </div>`;
                       })
                       .join("")
                   : `<p class="details__text">No borders</p>`
               }
            </div>
         </div>
      </div>
    `;
  }
}

export default new SearchView();
