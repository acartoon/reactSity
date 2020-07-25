import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";


export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onHoverСity} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return <PlaceCard
          offer={offer}
          key={offer.id}
          onTitleClick = {() => null}
          onHoverСity = {onHoverСity}
        />;
      })}
    </div>;
  }
}


OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    isPremium: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
  })).isRequired,
  onHoverСity: PropTypes.func.isRequired,
};

