import AbstractComponent from "./abstract-component";

const createEstateItemTemplate = (data) => {
  const {
    id,
    address,
    title,
    previewImage,
    price
  } = data;
  return (
    `<li class="estate__item">
        <a href="#">
          <img class="estate__image" src="${previewImage}" width="240" height="180">
        </a>
        <div class="estate__information">
          <a class="estate__title">${title}</a>
          <p class="estate__address">${address}</p>
          <span class="estate__price">${price}</span>
        </div>
    </li>`
  )
}

export default class EstateItem extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }
  getTemplate() {
    return createEstateItemTemplate(this._card);
  }
}