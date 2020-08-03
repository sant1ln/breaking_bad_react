import React from "react";
import "./styles/Card.css";
/* import stock from '../img/stock.png' */
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <div className="container_card">
        <Link to={`/about/${this.props.id}`}>
          <img
            className="img_place"
            src={this.props.img}
            alt={this.props.name}
          />
        </Link>
        <div className="info_place">
          <div className="info_place_item">
            <h3>Name</h3>
            <h4>{this.props.name}</h4>
          </div>
          <div className="info_place_item">
            <h3>NickName</h3>
            <h4>{this.props.alias}</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
