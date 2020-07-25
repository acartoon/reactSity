import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list";
import {mocks} from "../../mocks/mocks";

it(`PlaceList component render correct`, () => {
  const tree = renderer
    .create(
        <PlaceList
          offers={mocks}
          onTitleClick = {jest.fn()}
          onHoverСity = {jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
