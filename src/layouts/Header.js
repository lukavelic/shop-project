import React from "react"
import {ReactComponent as MenuIcon} from '../assets/menu.svg'
import { useState } from "react";
import './Header.css'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const clickHandler = () => {
        console.log('click')
        setIsActive(current => !current);
    };

    return(
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="hamb-menu">
                        <MenuIcon className="menu-icon" viewBox="0 0 24 24" onClick={clickHandler}/>
                    </div>
                    <ul className={`menu-items ${isActive ? 'show' : 'hide'}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <div className="logo">
                        <a href="/">VELOCYCLES</a>
                    </div>
                    <div className="title-spacing"></div>
                </div>
            </nav>
    );
};

export default Header;