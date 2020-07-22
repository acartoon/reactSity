const {mocks, Сities} = require(`../mocks/mocks.js`);

const getActiveOffers = (city) => {
  return mocks.reduce((arr, offer) => {
    if (offer.city.name === city) {
      arr.push(offer);
    }
    return arr;
  }, []);
};

const getLocations = (offers) => {
  const locations = new Set();

  offers.forEach((offer) => {
    locations.add(offer.city.name);
  });

  return Array.from(locations);
};


const getActiveCity = (selectedCity) => {
  let activeCity = ``;
  Object.keys(Сities).forEach((city) => {
    if (Сities[city].name === selectedCity) {
      activeCity = Сities[city];
    }
  });
  return activeCity;
};

//  -----

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`,
};

const initialState = {
  selectedСity: Сities.AMSTERDAM,
  offers: getActiveOffers(Сities.AMSTERDAM.name),
  locations: getLocations(mocks),
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  changeOffers: (city) => ({
    type: ActionType.CHANGE_OFFERS,
    payload: city
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY :
      return Object.assign({}, state, {
        selectedСity: getActiveCity(action.payload),
      });

    case ActionType.CHANGE_OFFERS :
      return Object.assign({}, state, {
        offers: getActiveOffers(action.payload)
      });
  }
  return state;
};

export {ActionCreator, reducer, ActionType};
