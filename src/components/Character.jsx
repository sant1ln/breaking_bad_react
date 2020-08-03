import React from "react";
import stock from "../img/stock.png";

import "./styles/Character.css";

class Character extends React.Component {
  /* constructor() {
    super();
    this.state = {
      characters: [
        {
          id: 1,
          name: "Walter",
          alias: "Heinsberg",
          status: "dead",
          img: stock ,
          ocupation: "cooker",
        },
        {
          id: 2,
          name: "Jesse",
          alias: "Pinkman",
          status: "aliva",
          img: stock,
          ocupation: "driver",
        },
        {
          id: 3,
          name: "Gustavo Fing",
          alias: "Gus",
          status: "dead",
          img: stock,
          ocupation: "CEO",
        },
      ],
    };
  } */

  render() {
    return (
      <React.Fragment>
        <article className="container_item">
          <img className="container_item-img" src={this.props.img} alt="ahah" />
          <div className="container_item-info">
            <div className="container_item-info-D">
              <h3>Nombre:</h3> <h4>{this.props.name}</h4>
            </div>
            <div className="container_item-info-D">
              <h3>Ocupacion:</h3>
              <h4>{this.props.occupation}</h4>
            </div>
            <div className="container_item-info-D">
              <h3>Estado:</h3> <h4>{this.props.status}</h4>
            </div>
            <div className="container_item-info-D">
              <h3>Apodo:</h3> <h4>{this.props.nickName}</h4>
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default Character;
