import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {offersMocks} from "./moks/offers.js";


const init = () => {

  ReactDOM.render(
      <App
        offers = {offersMocks}
      />,
      document.querySelector(`#root`)
  );
};

init();
