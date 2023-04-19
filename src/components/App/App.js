import React, { useState, useEffect } from "react";
import "./App.css";
import { api } from "../../utils/Api";

function App() {
  const [cards, setCards] = useState([]); // отвечает за отображение календаря
  const [likes, setLikes] = useState([]); // любимы праздники

  // хук для получения с API данных о праздниках, localStorage
  useEffect(() => {
    api
      .getHolidays()
      .then((res) => {
        setCards(res);
        localStorage.setItem("dates", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // постановка и удаление like сохранения массива в localStorage
  const onClickLike = (i) => {
    let index = likes.findIndex((x) => x === i);
    if (index >= 0) likes.splice(index, 1);
    else likes.push(i);
    setLikes([...likes]);
    localStorage.setItem("likes", JSON.stringify(likes));
  };

  // удаление карточки
  const onClickDelete = (i) => {
    setCards(cards.filter((_, p) => p !== i));
  };

  /* не закончена фильтрация
  function handleFavourites() {
    setLikes((state) =>
      state.map((el) => {
        if (localStorage.getItem("likes") !== null) {
          return el;
        }
        return el;
      })
    );
  }*/

  return (
    <div className="App">
      <div className="App__container container">
        <header className="container__header header">
          <h1 className="header__title">UK's holidays</h1>
        </header>
        <section className="container__content content">
          <ul className="content__list">
            {cards.map((item, i) => (
              <li key={i} className="content__card">
                <h2 className="content__title">{item.name}</h2>
                <p className="content__subtitle">{item.date}</p>
                <div className="content__buttons">
                  <button
                    type="button"
                    className="content__bin"
                    title="Удаление"
                    aria-label="Удалить праздник"
                    onClick={() => onClickDelete(i)}
                  ></button>
                  <button
                    type="button"
                    className="content__button"
                    title="Нравится"
                    aria-label="Любимые картинки"
                    onClick={onClickLike.bind(this, i)}
                  >
                    {likes.findIndex((x) => x === i) >= 0 ? (
                      <div className="content__like_active"></div>
                    ) : (
                      <div className="content__like"></div>
                    )}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <footer className="container__footer footer">
          <div className="footer__likes">
            <a href="#" className="footer__text">
              I like holidays
            </a>
            {/* <button */}
              {/* type="button" */}
              {/* className="footer__button" */}
              {/* title="Любимые" */}
              {/* aria-label="Любимые праздники" */}
              {/* onClick={handleFavourites} */}
            {/* > */}
              {/* favourite */}
            {/* </button> */}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
