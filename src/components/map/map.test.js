import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";

it(`Main component render correct`, () => {
  const tree = renderer
      .create(
          <Map />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
