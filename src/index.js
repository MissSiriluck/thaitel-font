import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./component/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import reportWebVitals from "./reportWebVitals";
import { CreateResidentProvider } from "./context/createResidentContext";
import { AuthContextProvider } from "./context/AuthContext";
import { BookingContextProvider } from "./context/BookingContext";
import { ResidentContextProvider } from "./context/ResidentContext";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CreateResidentProvider>

    {/* <React.StrictMode> */}
    <AuthContextProvider>
      <ResidentContextProvider>
        <BookingContextProvider>
          <App />
        </BookingContextProvider>
      </ResidentContextProvider>
    </AuthContextProvider>
    {/* </React.StrictMode> */}

    </CreateResidentProvider>

  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
