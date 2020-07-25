import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Sorting from "../sorting/sorting.jsx";
import PlaceList from "../place-list/place-list.jsx";


export default class CitiesPlaces extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sortType: `Popular`,
    };
  }

  _sortOffers(offers, sortName) {
    switch (sortName) {
      case `Price: low to high`:
        return offers.slice().sort((a, b) => a.price - b.price);
      case `Price: high to low`:
        return offers.slice().sort((a, b) => b.price - a.price);
      case `Top rated first`:
        return offers.slice().sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }

  render() {
    const {offers, selectedСity, onHoverСity} = this.props;
    const sortingOffers = this._sortOffers(offers, this.state.sortType);

    return <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {selectedСity.name}</b>

      < Sorting
        onClickSort = {(sortType) => {
          this.setState(() => {
            return {sortType};
          });
        }}
        activeSort = {this.state.sortType}
      />

      < PlaceList
        offers={sortingOffers}
        onHoverСity = {onHoverСity}
      />

    </section>;
  }
}

CitiesPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    isPremium: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
  })).isRequired,
  selectedСity: PropTypes.object.isRequired,
  onHoverСity: PropTypes.func.isRequired,
};

