import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order summary</h2>
            <p>selected items :{cart.length} </p>
        </div>
    );
};

export default Cart;