import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./components/App";

const store = createStore(reducer);
//reducers dosyalarını bağlıyoruz. redux bağlantısı böyle yapılıyo

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
/*
By wrapping the entire app with the Provider component, every component in the 
app tree will be able to access the Redux store if it wants to.
*/
