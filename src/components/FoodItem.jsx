import React, { Component } from "react";

class FoodItem extends Component {
  render() {
    return (
      <div>
        <div className="foods-container">
          <div className="single-food">
            <div className="img">
              <img src={this.props.img} />
            </div>
            <div className="title-price">
              <h3>{this.props.title}</h3>
              <p>{this.props.price}</p>
            </div>
            <div className="food-desc">{this.props.desc}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodItem;
