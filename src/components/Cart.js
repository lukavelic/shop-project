import React, { useEffect } from "react";
import './Cart.css';
import { ReactComponent as CartIcon } from '../assets/cart.svg'
import { ReactComponent as CloseIcon } from '../assets/close.svg'
import Button from "./Button";
import { useState } from "react";

const Cart = (props) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const modal = document.querySelector('.cart-modal')

        window.onclick = (e) => {
            if(e.target === modal) {
                setIsActive(false)
            }
        }
    },[])

    const clickHandler = () => {
        if(isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    // for reduce function
    const initialValue = 0;

    return (
        <div className="cart">
            <div className="cart-button" onClick={clickHandler}>
                <CartIcon viewBox="0 0 24 24"/>
            </div>
            <div className={`cart-modal ${isActive ? 'show' : 'hide'}`}>
                <div className="modal-content">
                    {props.items.map((item) => {
                        return (
                            <div className="cart-item">
                                <img src={item.img} alt='invalid-img' className='shop-item-img'/>
                                <div className="card-title cart-title">
                                    {item.title}
                                </div>
                                <div className="card-price">
                                    {item.price + '\u20AC'}
                                </div>
                                <div className="close-button">
                                    <CloseIcon viewBox="1 -3 24 24"/>
                                </div>
                            </div>
                        )
                    })}
                    <div className="card-price total-amount">
                        Total: {props.items.reduce(
                            (accumulator, currentValue) => {
                               return accumulator + currentValue.price;
                            }, initialValue
                        )}€
                    </div>
                    <Button className={'order'} name={'order'} value={'Place Order'} location={'/'}/>
                </div>
            </div>
        </div>
    )
}

export default Cart;