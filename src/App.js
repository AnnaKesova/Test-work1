import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
// import Card from "./Card";
import "./App.css";
import { api } from "./utils/Api";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getHolidays()
      .then((res) => {
        setCards(res);
        localStorage.setItem("dates", JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Хук, управляющий внутренним состоянием.
  const [rating, setRating] = useState(false);

  // Обработчики событий: изменяют внутреннее состояние

  function handleLike() {
    setRating(!rating);
  }

  // function handleDislike() {
  // setRating(-1);
  // }
  // const cardLikeButtonClassName = `photo__vector ${
  //  `photo__vector_active` : `photo__vector`
  // }`;

  return (
    <div className="App">
      <div className="App__container container">
        <section className="container__header header">
          <h1 className="header__title">Holidays UK</h1>
        </section>
        <section className="container__content content">
          <ul className="content__list">
            {cards.map((item, i) => (
              <li key={i} className="content__card">
                <h2 className="content__title">{item.name}</h2>
                <p className="content__subtitle">{item.date}</p>
                <button
                  type="button"
                  className={`photo__vector ${
                    rating && "photo__vector_active"
                  }`}
                  title="Нравится"
                  aria-label="Любимые картинки"
                  onClick={handleLike}
                ></button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
