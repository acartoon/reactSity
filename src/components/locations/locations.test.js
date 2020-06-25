import React from "react";
import renderer from "react-test-renderer";
import Locations from "./locations";

it(`Locations component render correct`, () => {
  const tree = renderer
      .create(
          <Locations />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
