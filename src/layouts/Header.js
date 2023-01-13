import React from "react"
import {ReactComponent as MenuIcon} from '../assets/menu.svg'
import './Header.css'

const Header = () => {
    return(
        <header className="header">
            <div className="hamb-box">
                <MenuIcon className="menu-icon" viewBox="0 0 24 24"/>
            </div>
            <div className="page-title">
                VELOCYCLES
            </div>
            <div className="title-spacing"></div>
        </header>
    )
}

export default Header