import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import {mocks} from "../../mocks/mocks";

it(`PlaceCard component render correct`, () => {
  const tree = renderer
      .create(
          <PlaceCard
            offer={mocks[0]}
            key={mocks[0].id}
            onTitleClick = {() => null}
            onActiveCard = {() => null}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
