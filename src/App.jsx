import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import FoodItem from "./components/FoodItem";

class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Header />
          <FoodItem />
        </div>
      </>
    );
  }
}
export default App;
