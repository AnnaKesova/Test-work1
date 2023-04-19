class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _handlePromiseErr(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  // получение картинок
  getHolidays() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handlePromiseErr);
  }
}

export const api = new Api({
  baseUrl: "https://date.nager.at/api/v3/publicholidays/2023/GB",
  headers: {
    "content-type": "application/json",
  },
});
