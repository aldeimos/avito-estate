import './css/main.css';
import './scss/main.scss';

import EstateItem from './components/estate-item';
import EstateController from './controllers/estate-controller.js';
import {render, RenderPosition} from './utils/render';
import {getEstates} from './mocks/estate.js';


const data = getEstates(25);
const estateList = document.querySelector(`.estate__list`);

const renderEstate = (container, data) => {
  return data.map((item) => {
    const estateController = new EstateController(container);
    estateController.render(item);
    return estateController;
  });
};

renderEstate(estateList, data);

/* data.forEach((item) => {
  render(estateList, new EstateItem(item).getElement(), RenderPosition.AFTERBEGIN);
}) */

