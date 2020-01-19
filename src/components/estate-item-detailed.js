import AbstractComponent from "./abstract-component";

const createEstateItemDetailedTemplate = (data) => {
  const {
    id,
    address,
    title,
    price,
    description,
    sellerName,
    images,
    previewImage // Не забыать удалить
  } = data;
  return (
    `<section class="estate-popup">
    <div class="estate-details">
      <div class="estate-details__header">
        <h3 class="estate-details__title">${title}</h3>
        <button class="estate-details__close-button"></button>
      </div>
      <div class="estate-details__content">
        <div class=" estate-details__gallery">
          <div
            class="estate-details__gallery-row estate-details__gallery-row_1"
          >
            <img
              class=" estate-details__image estate-details__image_large"
              src="${previewImage}"
            />
          </div>
          <div
            class="estate-details__gallery-row estate-details__gallery-row_2"
          >
            <img
              class="estate-details__image estate-details__image_small"
              src="${previewImage}"
            />
            <img
              class="estate-details__image estate-details__image_small"
              src="${previewImage}"
            />
            <img
              class="estate-details__image estate-details__image_small"
              src="${previewImage}"
            />
          </div>
        </div>
        <div class="estate-details__information">
          <div class=" estate-details__address">
            <h4>Адрес</h4>
            <span class="estate-details__text"
              >${address}</span
            >
          </div>
          <div class="estate-details__description">
            <h4>Описание квартиры</h4>
            <p class="estate-details__text">
              ${description}
            </p>
          </div>
          <div class="estate-details__price">
            <h4>Цена</h4>
            <span class="estate-details__text">${price}</span>
          </div>
          <div class="estate-details__contacts">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="#" class="estate-details__user-profile"
                  >${sellerName}</a
                >
              </li>
              <li>
                <a class="estate-details__user-phone" href="tel: +7123456789"
                  >+7 (123) 456 78-90</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`
  )
}

export default class EstateItemDetailed extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }
  getTemplate() {
    return createEstateItemDetailedTemplate(this._card);
  }
}