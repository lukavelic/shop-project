import React from "react";
import uniqid from 'uniqid';
import './Button.css';

const Button = (props) => {

    const clickHandler = (e) => {
        if(e.target.name === 'button-cart') {
            props.clickHandler(e);
        }
    }

    return (
        <a href={props.location}>
            <button className={'button ' + props.className} id={props.id} data-unique-item-id={uniqid()} name={'button-' + props.name} onClick={clickHandler}>{props.value}</button>
        </a>
    )
}

export default Button;