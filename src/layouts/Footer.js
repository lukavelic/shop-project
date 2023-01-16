import React from "react";
import './Footer.css'
import {ReactComponent as GitHubLogo} from '../assets/github-mark-white.svg'

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/lukavelic">
                <span>Find me on GitHub</span>
                <GitHubLogo className="github-logo" viewBox="0 0 100 100"/>
            </a>
        </div>
    )
}

export default Footer;