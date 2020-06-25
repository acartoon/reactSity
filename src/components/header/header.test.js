import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

it(`Header component render correct`, () => {
  const tree = renderer
      .create(
          <Header />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
