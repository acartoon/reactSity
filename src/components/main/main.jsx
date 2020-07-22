import React from "react";
import PropTypes from "prop-types";
import Locations from "../locations/locations.jsx";
import Map from "../map/map.jsx";
import Sorting from "../sorting/sorting.jsx";
import Header from "../header/header.jsx";
import PlaceList from "../place-list/place-list.jsx";

const Main = (props) => {
  const {offers, locations, locationClickHandler, selectedСity} = props;
  return <div className="page page--gray page--main">
    <Header />

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">

        < Locations
          locations = {locations}
          selectedСity = {selectedСity}
          locationClickHandler = {locationClickHandler}
        />

      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {selectedСity.name}</b>

            < Sorting />

            < PlaceList
              offers={offers}
            />

          </section>
          <div className="cities__right-section">

            < Map
              offers={offers}
              selectedСity = {selectedСity}
            />

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
  selectedСity: PropTypes.object.isRequired,
  locationClickHandler: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,

};

export default Main;
