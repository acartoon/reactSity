import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {mocks} from "../../mocks/mocks";

it(`App component render correct`, () => {
  const tree = renderer
      .create(
          <App
            offers = {mocks}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
