import {getRandomInt, getRandomString} from "../utils";


const OFFER_COUNT = 6;

export const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const photos = [
  `room`,
  `apartment-01`,
  `apartment-02`,
  `apartment-03`
];

const coords = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
];

export const typeRoom = [`Apartment`, `Private room`];

const getOffer = () => {

  return {
    id: getRandomString(3),
    title: titles[getRandomInt(titles.length - 1)],
    price: getRandomInt(500, 150),
    isPremium: Boolean(Math.round(Math.random())),
    img: `img/${photos[getRandomInt(photos.length - 1)]}.jpg`,
    type: typeRoom[getRandomInt(typeRoom.length - 1)],
    coords: []
  };
};

export const offersMocks = new Array(OFFER_COUNT).fill(``).map(getOffer);


offersMocks.forEach((offer, i) => {
  offer.coords = coords[i];
});

