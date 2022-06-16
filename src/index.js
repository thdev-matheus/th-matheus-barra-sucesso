import React from "react";
import ReactDOM from "react-dom/client";
import BarraSucesso from "./BarraSucesso";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#84d4df",
      light: "#dbfbff",
      dark: "#2b97a5",
    },
    error: {
      main: "#d69c6d",
      light: "#f7caa5",
      dark: "#b1713d",
    },
    text: {
      primary: "#2b97a5",
      secondary: "#84d4df",
      disabled: "#84d4df",
    },
    divider: "#84d4df",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BarraSucesso />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
