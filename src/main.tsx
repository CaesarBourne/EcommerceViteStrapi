import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.ts";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./state";

const store = configureStore({
  reducer: { cardReducer },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
