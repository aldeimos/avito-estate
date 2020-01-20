const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};


export default class API {
  constructor(url) {
    this._url = url;
  }

  getEstate() {
    return this._load({
      url: `items`
    })
      .then((response) => response.json());
  }
  getEstateDetails(id) {
    return this._load({
        url: `item/${id}`
      })
      .then((response) => response.json());
  }

  _load({
    url,
    method = `GET`,
    body = null,
    headers = new Headers()
  }) {
    return fetch(`${this._url}/${url}`, {
        method,
        body,
        headers
      })
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
};