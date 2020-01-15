import AbstractComponent from "./abstract-component";

export default class Property extends AbstractComponent {
  constructor(card) {
    this._card = card;
  }
  getTemplate() {
    return createFilmCardTemplate(this._card);
  }
}