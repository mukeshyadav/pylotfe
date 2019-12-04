import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./container/Dashboard";
import PageTitle from "./components/PageTitle";

import { WeatherProvider } from "./store.js";
import { reducer } from "./reducer.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loader: false
    };
  }

  render() {
    return (
      <div id="wrapper">
        <WeatherProvider initialState={this.state} reducer={reducer}>
          <PageTitle pageTitle="Weather Monster" />
          <Dashboard />
        </WeatherProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
