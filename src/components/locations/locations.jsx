import React from "react";
import LocationItem from "../locations-item/locations-item.jsx";
import PropTypes from "prop-types";

const Locations = (props) => {
  const {locations, locationClickHandler, selectedСity} = props;
  return <section className="locations container">
    <ul className="locations__list tabs__list">


      {Array.from(locations).map((location, i) => (
        <LocationItem
          key = {location + i}
          location = {location}
          active = {location === selectedСity.name ? true : false}
          locationClickHandler = {locationClickHandler}
        />
      ))}
    </ul>
  </section>;
};


export default Locations;

Locations.propTypes = {
  locations: PropTypes.array.isRequired,
  selectedСity: PropTypes.object.isRequired,
  locationClickHandler: PropTypes.func.isRequired,
};

