import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple } from "@material-ui/core/colors";
import { BrowserRouter as Router } from "react-router-dom";

import Spinner from "./components/Spinner/Spinner";
import MainRouter from "./MainRouter";
import React from "react";
import AuthContextComponent from "./components/context/AuthContext";

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
          <AuthContextComponent>
            <MainRouter />
          </AuthContextComponent>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
