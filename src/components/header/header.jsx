import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from './logo.png';

const Header = () => {


  return (
    <header className="app-header">
     
      <div className="app-header-logo">
        <Link to="/">
          <img src={logo} alt="Descrição da imagem" />
        </Link>
      </div>
    <nav class="app-menu">
    <ul className="app-menu__list">
        
       
        <li className="app-menu__item">
            <Link className="app-menu__link" to="/about">
                Sobre
            </Link>
        </li> 
        <li className="app-menu__item">
            <Link className="app-menu__link" to="/projects">
                Projetos
            </Link>
        </li>
      

    </ul>

    </nav>
</header>
)
  
}
export default Header;
