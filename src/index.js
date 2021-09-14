import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./Redux/store";
// import store from "./Redux/store";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./UseContext/ChangeTheme/ChangeTheme";
import { PersistGate } from "redux-persist/integration/react";
import { ProfileGibProvider } from "./UseContext/Profile_Git/ProfileGit";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContextProvider>
          <ProfileGibProvider>
            <App />
          </ProfileGibProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
