import React from "react";
import Header from "./layout/header";
import TinderCards from "./layout/tindercards";
import SwipeButtons from "./layout/swipeButtons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
