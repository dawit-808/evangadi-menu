import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import FoodItem from "./components/FoodItem";
import menu from "./assets/data";

class App extends Component {
  getTimeBasedCategory = () => {
    const hr = new Date().getHours();
    if (hr >= 5 && hr < 12) return "breakfast";
    else if (hr >= 12 && hr < 17) return "lunch";
    else if (hr >= 17 && hr < 22) return "dinner";
    else return "all";
  };

  render() {
    const category = this.getTimeBasedCategory();
    const filteredItems =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    return (
      <>
        <div className="all-container">
          <Header />
          <h2 className="category-title">
            {category === "all"
              ? "ALL MENU"
              : `NOW SERVING: ${category.toUpperCase()}`}
          </h2>
          <div className="foods-container">
            {filteredItems.map(({ id, title, price, img, desc }) => (
              <FoodItem
                key={id}
                img={img}
                title={title}
                price={price}
                desc={desc}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
