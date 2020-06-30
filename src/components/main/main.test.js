import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {mocks} from "../../mocks/mocks";

it(`Main component render correct`, () => {
  const tree = renderer
      .create(
          <Main
            offers = {mocks}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
