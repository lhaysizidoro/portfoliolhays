import React from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

import './menu.css'

const Menu = () => {
    const menuClassName = isMobile ? 'app-menu mobile' : 'app-menu';

    return(
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/">
                    Home
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/works">
                    Projetos
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/about">
                    Sobre
                </Link>
            </li>
           
        </ul>
    </nav>
    
)
}

export default Menu