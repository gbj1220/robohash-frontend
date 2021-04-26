import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple } from "@material-ui/core/colors";
import { BrowserRouter as Router } from "react-router-dom";

import Spinner from "./components/Spinner/Spinner";
import MainRouter from "./MainRouter";
import React from "react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple["A200"],
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFF5EE",
      contrastText: "black",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(","),
  },
  spacing: 10,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <MainRouter />
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
