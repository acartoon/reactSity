import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from "prop-types";


export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {offers} = this.props;
    // console.log(offers) рендерится при нвведении?!

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return <PlaceCard
          offer={offer}
          key={offer.id}
          onTitleClick = {() => null}
          onActiveCard={(id) => {
            this.setState({
              activeOffer: id,
            });
          }}
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
};

