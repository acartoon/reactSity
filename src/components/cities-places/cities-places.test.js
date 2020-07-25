import React from "react";
import renderer from "react-test-renderer";
import CitiesPlaces from "./cities-places";
import {mocks, Сities} from "../../mocks/mocks";


it(`CitiesPlaces component render correct`, () => {
  const tree = renderer
      .create(
          <CitiesPlaces
            offers = {mocks}
            selectedСity = {Сities.AMSTERDAM}
            onHoverСity = {jest.fn()}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
