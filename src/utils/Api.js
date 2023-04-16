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

  /*//добавить нового пользователя
  addUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: name, about: about }),
    }).then(this._handlePromiseErr);
  }

  //Добавить новую картинку.
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: name, link: link }),
    }).then(this._handlePromiseErr);
  }

  //добавить нового пользователя
  addUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatar }),
    }).then(this._handlePromiseErr);
  }

  //Удалить новую картинку.
  deleteNewCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handlePromiseErr);
  }*/

  //Добавить like картинке.
  changeLikeCardStatus() {
    return fetch(`${this._baseUrl}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handlePromiseErr);
  }

  //Удалить like картинки.
  deleteLike(id) {
    return fetch(`${this._baseUrl}/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handlePromiseErr);
  }
}

export const api = new Api({
  baseUrl: "https://date.nager.at/api/v3/publicholidays/2023/GB",
  headers: {
    // authorization: "cce2dc6d-fce0-4adb-80f6-8b8fce306754",
    "content-type": "application/json",
  },
});
