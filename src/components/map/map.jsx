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
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{width: `100%`, height: `100%`}}></div>
    </section>;
  }

  // карта загрузилась после рендеринга
  componentDidMount() {
    const {offers, selectedСity} = this.props;

    this._city.push(selectedСity.location.latitude, selectedСity.location.longitude);


    this._initMap(offers);
  }

  // карта загрузилась после Обновления пропсов
  componentDidUpdate() {
    const {offers, selectedСity} = this.props;
    this._city = [];
    this._city.push(selectedСity.location.latitude, selectedСity.location.longitude);

    // Очищаю слой
    this._layerGroup.clearLayers();
    this._map.setView(this._city, this.zoom);

    this._createPins(offers);
  }

  _initMap(offers) {

    this._map = leaflet.map(`map`, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: this._zoomControl,
      marker: this._marker,
    });

    this._map.setView(this._city, this.zoom);

    // создаю слой с городом
    this._layerGroup = leaflet.layerGroup().addTo(this._map);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    // создаю точки на карте
    this._createPins(offers);
  }

  _createPins(offers) {

    offers.forEach((offer) => {
      leaflet
      .marker(offer.coords, {icon: this._icon})
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

};
