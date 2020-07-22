import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationItem from './locations-item.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Симуляция клика на город`, () => {
  const locationClickHandler = jest.fn();

  const locationItem = shallow(<LocationItem
    location = {`Amsterdam`}
    active = {false}
    locationClickHandler = {locationClickHandler}
  />);

  locationItem.simulate(`click`);

  expect(locationClickHandler).toHaveBeenCalledTimes(1, `Amsterdam`);
});
