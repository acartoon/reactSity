import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorting from './sorting.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Симуляция клика на город`, () => {
  const onClickSort = jest.fn();

  const sorting = shallow(<Sorting
    onClickSort = {onClickSort}
    activeSort = {`Popular`}
  />);

  sorting.simulate(`click`);

  const placesOption = sorting.find(`.places__option`);

  placesOption.forEach((node) => {
    node.simulate(`click`);
  });
  expect(onClickSort).toHaveBeenCalledTimes(4, `Popular`);

});
