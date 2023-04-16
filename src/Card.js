import React, {useContext} from "react";
//import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onDeleteCard }) {
 
  return (
    <li className="photo">
      <img
        src={card.image}
        className="photo__image"
         
        //onClick={handleClick}
      />
      <div className="photo__title">
        
        <div className="photo__group-like">
          <button
            type="button"
           // className={cardLikeButtonClassName}
            title="Нравится"
            aria-label="Любимые картинки"
            //onClick={handleCardLike}
          ></button>
          {/* <span className="photo__numlike">{card.likes.length}</span> */}
        </div>
      </div>
      <button
        type="button"
        //className={cardDeleteButtonClassName}
        title="Удаление"
        aria-label="Урна"
        //onClick={handleCardDelete}
      ></button>
    </li>
  );
}

export default Card;
