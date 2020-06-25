import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {offersMocks} from "../../moks/offers";

it(`Main component render correct`, () => {
  const tree = renderer
      .create(
          <Main
            offers = {offersMocks}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});