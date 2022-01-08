import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductPage from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./components/cart-store/cart-store";

const cartStore = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <ProductPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
