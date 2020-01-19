const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getEstate = () => {
  return {
    id: randomIntFromInterval(1, 9999),
    address: `Мой дом, 21, квартира 1337`,
    title: `Продам гараж`,
    price: `10 000 000`,
    description: `lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem. Lorem lorem lorem Lorem.`,
    sellerName: `User Name`,
    previewImage: `../../dist/images/test.jpg`,
    images: [`../../dist/images/test.jpg`, `../../dist/images/test.jpg`, `../../dist/images/test.jpg`, `../../dist/images/test.jpg`]
  }
}

const getEstates = (count) => {
  return new Array(count)
    .fill(``)
    .map(getEstate);
};

export {
  getEstates
}