import React from 'react';
import {Link} from 'react-router-dom'

import './styles/Menu.css'

const Menu = () =>(
    <nav>
        <Link to="/">Personajes</Link>
        <Link to="/random">Personaje Aleatorio</Link>
        <Link to="/episodies">Episodios</Link>
    </nav>
)
export default Menu;