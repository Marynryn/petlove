import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "components/Loader/Loader";
import { ThemeProvider } from "@mui/material";
import theme from "components/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/petlove">
        <PersistGate persistor={persistor} loading={<Loader />}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
