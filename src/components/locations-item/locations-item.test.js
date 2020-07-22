import React from "react";
import renderer from "react-test-renderer";
import LocationsItem from "./locations-item.jsx";

it(`LocationsItem component render correct`, () => {
  const tree = renderer
      .create(
          <LocationsItem
            location = {`Amsterdam`}
            active = {false}
            locationClickHandler = {jest.fn()}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
