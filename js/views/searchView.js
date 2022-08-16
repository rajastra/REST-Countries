class searchView {
  _parentElment = document.querySelector(".search");

  getQuery() {
    const result = this._parentElment.querySelector(".search__input").value;
    this._clearInput();
    return result;
  }

  _clearInput() {
    this._parentElment.querySelector(".search__input").value = "";
  }
  addHandlerSearch(handler) {
    this._parentElment.addEventListener("change", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default searchView;
