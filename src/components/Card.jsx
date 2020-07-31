import React from "react";
import './styles/Card.css';
import stock from '../img/stock.png'
import {Link} from 'react-router-dom'

class Card extends React.Component {
  render() {
    return (
        <div className="container_card">
          <Link to="/about"><img className="img_place" src={stock} alt="ahah" /></Link>
            <div className="info_place">
                <h3>Character className</h3>
                <p>alias</p>
                <p>is alaive?</p>
            </div>
        </div>
      
    );
  }
}
export default Card;
