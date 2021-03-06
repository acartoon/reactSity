import React from "react";
import renderer from "react-test-renderer";
import Locations from "./locations";
import {Сities} from "../../mocks/mocks";

it(`Locations component render correct`, () => {
  const tree = renderer
      .create(
          <Locations
            selectedСity = {Сities.AMSTERDAM}
            locations = {[`Amsterdam`, `Dusseldorf`]}
            active = {false}
            locationClickHandler = {jest.fn()}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
