import View from "./View.js";

export class FilterData extends View {
  _parentElement = document.querySelector("#filter");

  addHandlersFilter(handler) {
    ["change", "load"].forEach((event) =>
      this._parentElement.addEventListener(event, handler)
    );
  }

  getRegion() {
    return this._parentElement.value;
  }
}
