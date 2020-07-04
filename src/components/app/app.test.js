import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {mocks} from "../../mocks/mocks";

jest.mock(`leaflet`, () => {
  return {
    icon: jest.fn(),
    tileLayer: jest.fn().mockImplementation(() => {
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
