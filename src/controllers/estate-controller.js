import EstateItem from '../components/estate-item';
import EstateItemDetails from '../components/estate-item-detailed';
import {
  render,
  RenderPosition,
  remove
} from '../utils/render.js';

export default class EstateController {
  constructor(container) {
    this._container = container;
  }
  render(data) {
    this._estateItem = new EstateItem(data);
    this._estateItemDetails = new EstateItemDetails(data);
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
      const buttonClose = this._estateItemDetails.getElement().querySelector(`.estate-details__close-button`);

      render(container, this._estateItemDetails.getElement(), RenderPosition.BEFOREEND);
      buttonClose.addEventListener(`click`, onButtonCloseClick);
      document.addEventListener(`keydown`, onEscKeydown);
    }
    render(this._container, this._estateItem.getElement(), RenderPosition.AFTERBEGIN);
    estateItem.addEventListener(`click`, onEstateItemClick);
  }
}