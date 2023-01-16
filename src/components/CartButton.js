import React from "react";
import './CartButton.css';
import { ReactComponent as CartIcon } from '../assets/cart.svg'

const CartButton = () => {
    return (
        <div className="cart-button">
            <CartIcon viewBox="0 0 24 24"/>
        </div>
    )
}

export default CartButton;