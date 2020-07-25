import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Locations from "../locations/locations.jsx";
import Map from "../map/map.jsx";
import Header from "../header/header.jsx";
import CitiesPlaces from "../cities-places/cities-places.jsx";

export default class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCity: null,
    };
  }

  render() {

    const {offers, locations, locationClickHandler, selectedСity} = this.props;
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
            <CitiesPlaces
              offers={offers}
              selectedСity={selectedСity}
              onHoverСity = {(cityId) => (
                this.setState({activeCity: cityId})
              )}
            />
            <div className="cities__right-section">

              < Map
                offers={offers}
                selectedСity = {selectedСity}
                activeCity = {this.state.activeCity}
              />

            </div>
          </div>
        </div>

      </main>
    </div>;
  }
}

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

