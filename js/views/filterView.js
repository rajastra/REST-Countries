import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".filter-box");

  removeHidden() {
    this._parentElement.classList.remove("hidden");
  }
}

export default new FilterView();
