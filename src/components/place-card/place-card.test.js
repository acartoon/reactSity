import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import {offersMocks} from "../../moks/offers";

it(`PlaceCard component render correct`, () => {
  const tree = renderer
      .create(
          <PlaceCard
            offer={offersMocks[0]}
            key={offersMocks[0].id}
            onTitleClick = {() => null}
          />
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
