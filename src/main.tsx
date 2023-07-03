import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme.tsx";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import Provider from "react-redux/es/components/Provider";

const store = configureStore({
  reducer: { cart: cartReducer },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <App />
    </Provider>
  </React.StrictMode>
);
