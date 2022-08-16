import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".filter-box");

  _generateMarkup() {
    return `
      <form action="#" class="search">
         <button type="submit" class="search__button">
            <i class="fa-solid fa-search"></i>
         </button>
         <input type="text" class="search__input" placeholder="Search">
      </form>
      <!-- create select filter -->
      <select id="filter" class="form-control">
      ${this._data.regions
        .map((region) => {
          return `<option value="${region}" ${
            this._data.region === region ? "selected" : ""
          }>${region}</option>`;
        })
        .join("")}
      </select>
    `;
  }
}

export default new FilterView();
