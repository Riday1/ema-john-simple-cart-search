import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const productData = useLoaderData();
    const { products, previousCart } = productData
    return (
        <div>
            <h1>There is no order history {previousCart.length}</h1>
        </div>
    );
};

export default Orders;