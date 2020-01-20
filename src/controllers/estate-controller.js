import EstateItem from '../components/estate-item';
import EstateItemDetails from '../components/estate-item-detailed';
import {
  render,
  RenderPosition,
  remove
} from '../utils/render.js';

import API from '../api.js';

const API_URL = `http://134.209.138.34`;
const api = new API(API_URL);

export default class EstateController {
  constructor(container) {
    this._container = container;
  }
  render(data) {
    this._estateItem = new EstateItem(data);
    this._estateItemDetails = null;
    const estateItem = this._estateItem.getElement();

    const onEscKeydown = (evt) => {
      const isEscape = evt.key === `Escape` || evt.key === `Esc`;
      if (isEscape) {
        remove(this._estateItemDetails);
        document.removeEventListener(`keydown`, onEscKeydown);
      }
    };

    const onButtonCloseClick = () => {
      remove(this._estateItemDetails);
      document.removeEventListener(`keydown`, onEscKeydown);
    };

    const onEstateItemClick = () => {
      const container = document.body;

      api.getEstateDetails(data.id).then((data) => {
        this._estateItemDetails = new EstateItemDetails(data);
        const buttonClose = this._estateItemDetails.getElement().querySelector(`.estate-details__close-button`);
        render(container, this._estateItemDetails.getElement(), RenderPosition.BEFOREEND);
        buttonClose.addEventListener(`click`, onButtonCloseClick);
        this.setGalleryImageHandler();
        this.setClickOutsideHandler();
      })
      document.addEventListener(`keydown`, onEscKeydown);
    }
    render(this._container, this._estateItem.getElement(), RenderPosition.AFTERBEGIN);
    estateItem.addEventListener(`click`, onEstateItemClick);
  }
  setGalleryImageHandler() {
    const mainImage = this._estateItemDetails.getElement().querySelector(`.estate-details__image_large`);
    const smallImages = [...this._estateItemDetails.getElement().querySelectorAll(`.estate-details__image_small`)];
    const onGalleryImageClick = (evt) => {
      mainImage.src = evt.target.src;
      smallImages.forEach((img) => {
        img.classList.remove(`estate-details__image_active`);
      })
      evt.target.classList.add(`estate-details__image_active`);
    }
    smallImages.forEach((img) => {
      img.addEventListener(`click`, onGalleryImageClick);
    })
  }
  setClickOutsideHandler() {
    const onOutsideClick = (evt) => {
      if (evt.target === this._estateItemDetails.getElement()) {
        remove(this._estateItemDetails);
        this._estateItemDetails.getElement().removeEventListener(`click`, onOutsideClick);
      }
    }
    this._estateItemDetails.getElement().addEventListener(`click`, onOutsideClick);
  }
}