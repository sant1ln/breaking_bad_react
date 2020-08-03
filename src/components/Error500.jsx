import React from "react";

import errorImg from "../img/api_failed.png";
import './styles/Error500.css'

const Error500 = () => (
  <div className="errorContainer">
    <img src={errorImg} alt="error" />
    <div className="info_container">
      <h3>No se pudo cargar los personajes </h3>
      <p>Error code: 500</p>
    </div>
  </div>
);
export default Error500;
