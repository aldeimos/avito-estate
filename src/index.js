import './scss/main.scss';

import EstateController from './controllers/estate-controller.js';
import API from './api.js';

const API_URL = `http://134.209.138.34`;
const api = new API(API_URL);
const estateList = document.querySelector(`.estate__list`);

const renderEstate = (container, data) => {
  return data.map((item) => {
    const estateController = new EstateController(container);
    estateController.render(item);
    return estateController;
  });
};

api.getEstate().then((data) => {
  renderEstate(estateList, data);
});
