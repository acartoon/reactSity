import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";
import Locations from "../locations/locations.jsx";
import Map from "../map/map.jsx";
import Sorting from "../sorting/sorting.jsx";
import Header from "../header/header.jsx";

const Main = (props) => {
  const {offers} = props;

  return <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">

        < Locations />

      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            < Sorting />

            <div className="cities__places-list places__list tabs__content">

              {offers.map((offer) => {
                return <PlaceCard
                  offer={offer}
                  key={offer.id}
                  onTitleClick = {() => null}
                />;
              })}

            </div>
          </section>
          <div className="cities__right-section">

            < Map />

          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    isPremium: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
  })).isRequired,
};

export default Main;
