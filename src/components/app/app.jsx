import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";

const App = (props) => {
  const {selectedСity, offers, locations, onLocationClick} = props;

  return <Main
    offers={offers}
    locations = {locations}
    selectedСity = {selectedСity}
    locationClickHandler = {(city) => {
      onLocationClick(city);
    }}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
  })).isRequired,
  selectedСity: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  onLocationClick: PropTypes.func.isRequired,
};

// store => props
// из хранилища в props
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  selectedСity: state.selectedСity,
  offers: state.offers,
  locations: state.locations,
});

// props => store
// Обработчики событий при изменении state

const mapDispatchToProps = (dispatch) => ({
  onLocationClick: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeOffers(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
