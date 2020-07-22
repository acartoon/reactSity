import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/app.jsx";
import {mocks} from "./mocks/mocks.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer.js";

const init = () => {
  const store = createStore(reducer);


  ReactDOM.render(<Provider store={store}>
    <App
      offers = {mocks}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
