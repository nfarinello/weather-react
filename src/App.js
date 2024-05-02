import React from "react";
import ReactDOM from "react-dom";
import SearchEngine from "./ SearchEngine";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchEngine />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
