import View from "./View.js";

export class FilterData extends View {
  _parentElement = document.querySelector(".filter-box");

  addHandlersFilter(handler) {
    this._parentElement.addEventListener("change", function (event) {
      const target = event.target.value;
      const options = document.querySelector(".form-control");
      options.value = target;
      if (!target) return;
      handler();
    });
  }

  getRegion() {
    const region = document.querySelector(".form-control").value;
    return region;
  }
}
