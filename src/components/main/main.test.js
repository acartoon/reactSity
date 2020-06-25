import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import {offersMocks} from "../../moks/offers";


it(`PlaceList component render correct`, () => {
  const tree = renderer
      .create(
          <Main
            placesList = {offersMocks}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
