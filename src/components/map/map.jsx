import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import PropTypes from "prop-types";


export default class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._city = [];
    this._map = null;
    this._layerGroup = null;
    this.zoom = 12;
  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  // карта загрузилась после рендеринга
  componentDidMount() {
    this._initMap();
  }

  // карта загрузилась после Обновления пропсов
  componentDidUpdate() {
    // Очищаю слой
    this._layerGroup.clearLayers();
    const {selectedСity} = this.props;
    const city = [];
    city.push(selectedСity.location.latitude, selectedСity.location.longitude);

    this._map.setView(city, this.zoom);

    this._createPins();
  }

  _initMap() {
    const {offers, selectedСity} = this.props;
    const city = [];
    city.push(selectedСity.location.latitude, selectedСity.location.longitude);

    this._map = leaflet.map(`map`, {
      center: city,
      zoom: this._zoom,
      zoomControl: this._zoomControl,
      marker: this._marker,
    });


    // создаю слой с городом
    this._layerGroup = leaflet.layerGroup().addTo(this._map);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
      .addTo(this._map);

    this._map.setView(city, this.zoom);
    // создаю точки на карте
    this._createPins(offers);
  }

  _createPins() {
    const {offers, activeCity} = this.props;

    offers.forEach((offer) => {
      const iconUrl = (offer.id === activeCity) ? `img/pin-active.svg` : `img/pin.svg`;
      const icon = leaflet.icon({
        iconUrl,
        iconSize: [30, 30],
      });
      leaflet
      .marker(offer.coords, {icon})
      .addTo(this._layerGroup);
    });
  }
}


Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]),
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
    }).isRequired,
  })).isRequired,
  selectedСity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  activeCity: PropTypes.string,
};
