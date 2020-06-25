import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {offersMocks} from "../../moks/offers";

it(`App component render correct`, () => {
  const tree = renderer
      .create(
          <App
            offers = {offersMocks}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
