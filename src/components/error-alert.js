import AbstractComponent from './abstract-component';
import {remove} from '../utils/render.js';

const createErrorAlertTemplate = () => {
  return (
    `<section class="estate-popup">
      <div class="estate-details">
      <p class="estate-details__alert">Сервер не отвечает, попробуйте повторить попытку позже.</p>
      </div>
    </section>`
  )
}

export default class ErrorAlert extends AbstractComponent {
  constructor() {
    super();
    this.setClickOutsideHandler();
  }
  getTemplate() {
    return createErrorAlertTemplate();
  }
  setClickOutsideHandler() {
    const onOutsideClick = (evt) => {
      if (evt.target === this.getElement()) {
        remove(this);
        this.getElement().removeEventListener(`click`, onOutsideClick);
      }
    }
    this.getElement().addEventListener(`click`, onOutsideClick);
  }
}