import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import {mocks, Сities} from "../../mocks/mocks";

jest.mock(`leaflet`, () => {
  return {
    icon: jest.fn(),
    tileLayer: jest.fn().mockImplementation(() => {
      return {
        addTo: jest.fn(),
      };
    }),

    layerGroup: jest.fn().mockImplementation(() => {
      return {
        addTo: jest.fn(),
      };
    }),

    marker: jest.fn().mockImplementation(() => {
      return {
        addTo: jest.fn(),
      };
    }),

    map: jest.fn().mockImplementation(() => {
      return {
        setView: jest.fn(),
      };
    }),

  };
});

it(`Main component render correct`, () => {
  const tree = renderer
      .create(
          <Map
            offers = {mocks}
            selectedСity = {Сities.AMSTERDAM}
            activeCity = {`FoY`}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
