import React, { useEffect } from "react";
import uniqid from 'uniqid';
import './Cart.css';
import { ReactComponent as CartIcon } from '../assets/cart.svg'
import RemoveIcon from '../assets/close.svg'
// import { ReactComponent as RemoveIcon } from '../assets/close.svg'
import Button from "./Button";
import { useState } from "react";

const Cart = (props) => {
    const [isActive, setIsActive] = useState(false);

    console.log(props)

    useEffect(() => {
        const modal = document.querySelector('.cart-modal')

        window.onclick = (e) => {
            if(e.target === modal) {
                setIsActive(false)
            }
        }
    },[])

    const modalHandler = () => {
        if(isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    const itemClickHandler = (e) => {
        console.log(props.cart)
        console.log(e)
        props.clickHandler(e, 'remove');
    }

    // for reduce function
    let initialCost = 0;
    const totalCost = props.cart.reduce((accumulator, currentValue) => {
        console.log(props.items[currentValue.id].price)
        return accumulator + props.items[currentValue.id].price;
    },initialCost)

    return (
        <div className="cart">
            <div className="cart-button" onClick={modalHandler}>
                <CartIcon viewBox="0 0 24 24"/>
            </div>
            <div className={`cart-modal ${isActive ? 'show' : 'hide'}`}>
                <div className="modal-content">
                    {props.cart.map((item) => {
                        return (
                            <div key={uniqid()} className="cart-item">
                                <img src={props.items[item.id].img} alt='invalid-img' className='shop-item-img'/>
                                <div className="card-title cart-title">
                                    {props.items[item.id].title}
                                </div>
                                <div className="card-price">
                                    {props.items[item.id].price + '\u20AC'}
                                </div>
                                <img className="remove-button" src={RemoveIcon} alt="remove-icon" id={item.id} data-unique-item-id={item.uniqueItemId} onClick={itemClickHandler}/>
                                {/* <div className="remove-button" id={item.id} data-unique-item-id={uniqid()} onClick={itemClickHandler}>
                                    
                                </div> */}
                            </div>
                        )
                    })}
                    <div className="card-price total-amount">
                        Total: {totalCost}€
                    </div>
                    <div>
                    {props.cart.length >= 1 ? <Button className={'order'} name={'order'} value={'Place Order'} location={'/'}/> : 'Cart is Empty'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;