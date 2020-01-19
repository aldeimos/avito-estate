export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Нельзя создать инстанс`);
    }
    this._element = null;
  }
  getTemplate() {
    throw new Error(`Неправильно вызван метод`);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}