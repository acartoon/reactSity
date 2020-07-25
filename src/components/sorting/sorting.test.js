import React from "react";
import renderer from "react-test-renderer";
import Sorting from "./sorting";

it(`Locations component render correct`, () => {
  const tree = renderer
      .create(
          <Sorting
            onClickSort = {jest.fn()}
            activeSort = {`Popular`}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
