import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Orders = () => {
    const productData = useLoaderData();
    const { products, previousCart } = productData
    const cart = previousCart;
    return (
        <div className='order-container'>
            <div className="order-list">
                <div className='order-list-container'>
                    {
                        cart.map(product => <ReviewItem
                            product={product}
                            key={product.key}
                        ></ReviewItem>)
                    }
                </div>
            </div>
            <div className="order-summary">
                <div className='order-summary-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Orders;