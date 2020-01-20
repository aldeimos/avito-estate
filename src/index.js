import './css/main.css';
import './scss/main.scss';

import EstateItem from './components/estate-item';
import EstateController from './controllers/estate-controller.js';
import API from './api.js';
import {
  render,
  RenderPosition
} from './utils/render';
import {
  getEstates
} from './mocks/estate.js';


const data = getEstates(25);
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
