import React from 'react';

const Cart = (props) => {
    const total = props.cart.reduce( (total, prd) => total + prd.price, 0);
    const shippingCostTotal = props.cart.reduce( (shippingCostTotal, prd) => shippingCostTotal + prd.shipping, 0);
    const tax = total * .10;
    const totalPrice = total + shippingCostTotal + tax;
    function fixToNumber(num){
        const numString = num.toFixed(2);
        return Number(numString);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items Ordered: {props.cart.length}</h3>
            <h5>Product Price: {fixToNumber(total)}</h5>
            <h5>Shipping Cost: {fixToNumber(shippingCostTotal)}</h5>
            <h5>Tax + VAT: {fixToNumber(tax)}</h5>
            <h4>Total Price: {fixToNumber(totalPrice)}</h4>
        </div>
    );
};

export default Cart;