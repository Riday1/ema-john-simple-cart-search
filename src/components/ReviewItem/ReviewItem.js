import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product }) => {
    const { name, price, shipping, quantity, img } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-item-info'>
                <div className='review-item-details'>
                    <p>{name}</p>
                    <p><small>Price : $ {price}</small></p>
                    <p><small>Shipping : $ {shipping}</small></p>
                    <p><small>Quantity{quantity}</small></p>
                </div>
                <div className='delete-btn-container'>
                    <button>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;