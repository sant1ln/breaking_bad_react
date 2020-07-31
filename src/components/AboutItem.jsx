import React from "react";
import Stock from "../img/stock.png";

import "./styles/AboutItem.css";

class AboutItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <article className="container_item">
          <img className="container_item-img" src={Stock} alt="ahah" />
          <div className="container_item-info">
            <h4>Nombre: name</h4>
            <h4>Ocupacion: Ocupation</h4>
            <h4>Estado: Status</h4>
            <h4>Apodo: NickName</h4>
          </div>
        </article>
      </React.Fragment>
    );
  }
}
export default AboutItem;
