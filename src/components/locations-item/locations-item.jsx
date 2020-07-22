import React from "react";
import PropTypes from "prop-types";


const LocationItem = (props) => {
  const {location, active, locationClickHandler} = props;

  return <li
    onClick={() => {
      locationClickHandler(location);
    }}
    className="locations__item">
    <a className={`locations__item-link tabs__item ${active ? `tabs__item--active` : ``}`} href="#">
      <span>{location}</span>
    </a>
  </li>;
};

export default LocationItem;

LocationItem.propTypes = {
  location: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  locationClickHandler: PropTypes.func.isRequired,
};
