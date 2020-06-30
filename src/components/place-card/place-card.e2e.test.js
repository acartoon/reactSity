import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mocks} from "../../mocks/mocks.js";
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

it(`Симуляция клика на название`, () => {
  const clickHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer={mocks[0]}
    key={mocks[0].id}
    onTitleClick = {clickHandler}
  />);

  const name = placeCard.find(`.place-card__name`);

  name.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);

});
