import {reducer, ActionType} from "./reducer.js";
const {Сities} = require(`../mocks/mocks.js`);

const offersAmsterdam = [
  {
    id: `FoY`,
    img: `img/apartment-01.jpg`,
    isPremium: true,
    price: 294,
    title: `Canal View Prinsengracht`,
    rating: 38,
    type: `Private room`,
    city: Сities.AMSTERDAM,
    coords: [52.3909553943508, 4.85309666406198],
  },

  {
    id: `m7p`,
    img: `img/apartment-02.jpg`,
    isPremium: true,
    price: 308,
    title: `Wood and stone place`,
    rating: 90,
    type: `Private room`,
    city: Сities.AMSTERDAM,
    coords: [52.369553943508, 4.85309666406198],
  },

  {
    id: `jEu`,
    img: `img/apartment-01.jpg`,
    isPremium: true,
    price: 312,
    title: `Canal View Prinsengracht`,
    rating: 60,
    type: `Private room`,
    city: Сities.AMSTERDAM,
    coords: [52.3909553943508, 4.929309666406198],
  },

];

const offersHamburg = [
  {
    id: `aZr`,
    img: `img/apartment-03.jpg`,
    isPremium: true,
    price: 372,
    title: `Canal View Prinsengracht`,
    rating: 20,
    type: `Private room`,
    city: Сities.HAMBURG,
    coords: [53.558341000000006, 10.001654],
  },

  {
    id: `TSe`,
    img: `img/apartment-02.jpg`,
    isPremium: false,
    price: 316,
    title: `Canal View Prinsengracht`,
    rating: 50,
    type: `Private room`,
    city: Сities.HAMBURG,
    coords: [53.563341, 10.019654000000001],
  },

  {
    id: `jEf`,
    img: `img/apartment-02.jpg`,
    isPremium: true,
    price: 266,
    title: `Wood and stone place`,
    rating: 60,
    type: `Private room`,
    city: Сities.HAMBURG,
    coords: [53.540341000000005, 10.025654000000001],
  },

  {
    id: `j45`,
    img: `img/apartment-03.jpg`,
    isPremium: true,
    price: 266,
    title: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    city: Сities.HAMBURG,
    coords: [53.563341, 9.975654],
  },
];

describe(`Reducer test group`, () => {
  it(`Reducer correctly increments selectedСity`, () => {
    expect(reducer(
        {
          selectedСity: Сities.AMSTERDAM,
          offers: offersAmsterdam,
          locations: [`Amsterdam`, `Hamburg`],
        },
        {
          type: ActionType.CHANGE_CITY,

          payload: `Hamburg`
        }
    )).toEqual({
      selectedСity: Сities.HAMBURG,
      offers: offersAmsterdam,
      locations: [`Amsterdam`, `Hamburg`],
    });
  });

  it(`Reducer correctly increments changeOffers`, () => {
    expect(reducer(
        {
          selectedСity: Сities.HAMBURG,
          offers: offersAmsterdam,
          locations: [`Amsterdam`, `Hamburg`],
        },
        {
          type: ActionType.CHANGE_OFFERS,
          payload: `Hamburg`
        }
    )).toEqual({
      selectedСity: Сities.HAMBURG,
      offers: offersHamburg,
      locations: [`Amsterdam`, `Hamburg`],
    });
  });

});
