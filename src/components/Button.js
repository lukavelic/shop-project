import React from "react";
import './Button.css';

const Button = (props) => {

    return (
        <a href={props.location}>
            <button className={'button ' + props.className} name={'button-' + props.name}>{props.value}</button>
        </a>
    )
}

export default Button;