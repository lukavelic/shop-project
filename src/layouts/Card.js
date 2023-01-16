import React from "react";
import './Card.css'
import Button from "../components/Button";

const Card = (props) => {

    if(props.className === 'hero-card') {
        return (
            <div className={'card ' + props.className}>
                <a href={props.location}><img className='hero-img' src={props.img} alt='image-not-found'></img></a>
                <a href={props.location} className="card-title"><span>{props.title}</span></a>
                <span className="card-description">{props.description}</span>
                <Button className={'hero-shop'} name={'shop'} value={'Shop Now'} location={'/shop'}/>
            </div>
        );
    } else if(props.className === 'shop-card') {
        return (
            <div className={'card ' + props.className}>
                <a href={props.location}><img className='hero-img' src={props.img} alt='image-not-found'></img></a>
                <a href={props.location} className="card-title"><span>{props.title}</span></a>
                <span className="card-description">{props.description}</span>
                <span className="card-price">{props.price + '\u20AC'}</span>
                <Button className={'hero-shop'} name={'shop'} value={'Add to Cart'} location={'/shop'}/>
            </div>
        );
    }
}

export default Card;