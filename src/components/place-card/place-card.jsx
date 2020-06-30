import React from "react";
import PropTypes from "prop-types";
import {typeRoom, titles} from "../../mocks/offers";

const PlaceCard = (props) => {
  const {offer, onTitleClick, onActiveCard} = props;
  return <article
    onMouseEnter={() => onActiveCard({id: offer.id})}
    onMouseLeave={() => onActiveCard({id: null})}
    className="cities__place-card place-card">

    {offer.isPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``
    }

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
        {/* <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark-active"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button> */}
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: 80 + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2
        onClick={onTitleClick}
        className="place-card__name">
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
  ;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.oneOf(titles),
    price: PropTypes.number,
    isPremium: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.oneOf(typeRoom),
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onActiveCard: PropTypes.func.isRequired,
};

export default PlaceCard;
