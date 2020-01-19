export default class PropetyDetails {
  constructor(card) {
    this._card = card;
  }
  getTemplate() {
    return createFilmCardTemplate(this._card);
  }
}