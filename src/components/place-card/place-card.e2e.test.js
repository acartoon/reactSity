import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mocks} from "../../mocks/mocks.js";
import PlaceCard from './place-card';

Enzyme.configure({adapter: new Adapter()});

it(`Симуляция клика на название`, () => {
  const clickHandler = jest.fn();
  const hoverHandler = jest.fn();

  const placeCardComponent = shallow(<PlaceCard
    offer={mocks[0]}
    key={mocks[0].id}
    onTitleClick = {clickHandler}
    onActiveCard = {hoverHandler}
  />);

  const name = placeCardComponent.find(`.place-card__name`);
  const placeCard = placeCardComponent.find(`.place-card`);

  name.simulate(`click`);
  placeCard.simulate(`mouseEnter`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(hoverHandler).toHaveBeenCalledTimes(1, {id: mocks[0].id});
});
