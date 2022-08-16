import View from "./View.js";

class BackButtonView extends View {
  _parentElement = document.querySelector(".filter-box");

  addHandlerBack(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".back-button");
      if (!btn) return;
      handler();
    });
  }
  _generateMarkup() {
    return `
      <div class="back-button">
        <a href="#" class="back-button__link">Back</a>
      </div>
    `;
  }
  renderButton() {
    this._clear();
    this._parentElement.innerHTML = this._generateMarkup();
  }
}
export default new BackButtonView();
