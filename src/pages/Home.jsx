import React from "react";
import Card from "../components/Card";

import './styles/Home.css';


class Home extends React.Component {
  render() {
    return (
      <div className="container_cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
      
    );
  }
}
export default Home;
