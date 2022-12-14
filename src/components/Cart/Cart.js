import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * (product.quantity);
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>selected items :{quantity} </p>
            <p>Total Price : {total}</p>
            <p>Total Shipping :{shipping} </p>
            <p>Tax : {tax}</p>
            <h5>Grand Total : {grandTotal} </h5>
            <button className='clear-cart'>
                <p>Clear Cart</p>
                <FontAwesomeIcon  className='icon' icon={faTrashCan}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Cart;
