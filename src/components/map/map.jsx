import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";


export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.city = [52.38333, 4.9];

    this.zoom = 12;

  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: this._zoomControl,
      marker: this._marker,
    });

    map.setView(this.city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {
      leaflet
      .marker(offer.coords, {icon})
      .addTo(map);
    });
  }
}


Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    isPremium: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
  })).isRequired,
};
