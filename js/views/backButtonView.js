import View from "./View.js";

class BackButtonView extends View {
  _parentElement = document.querySelector(".back-box");

  addHandlerBack(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".back-button");
      if (!btn) return;
      const back = document.querySelector(".back-box");
      back.classList.add("hidden");
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
    this._parentElement.classList.remove("hidden");
    const form = document.querySelector(".filter-box");
    form.classList.add("hidden");
    this._parentElement.innerHTML = this._generateMarkup();
  }
}
export default new BackButtonView();
