import React from 'react';

const ReviewDetail = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div style={{marginLeft: '10%', padding: '10px', border: '1px solid lightgray'}}>
            <h4>{name}</h4>
            <small>${price}</small>
            <p>quantity: {quantity}</p>
            <button className="btn-add-cart" onClick={() => props.handleRemoveBtn(key)}>Remove</button>
        </div>
    );
};

export default ReviewDetail;