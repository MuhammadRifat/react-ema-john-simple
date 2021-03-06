import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import surpriseImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect( () => {
        const databaseCart = getDatabaseCart();
        const productKeys = Object.keys(databaseCart);
        const products = fakeData;

        const cartProducts = productKeys.map(key => {
            const product = products.find(product => product.key === key)
            product.quantity = databaseCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    const handleRemoveBtn = key => {
        const newCart = cart.filter(pd => pd.key != key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }

    const [isShow, setIsShow] = useState(false);
    const handlePlaceBtn = () => {
        setCart([]);
        processOrder();
        setIsShow(true);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewDetail product={product} handleRemoveBtn={handleRemoveBtn}></ReviewDetail>)
                }
                {
                    isShow && <img src={surpriseImage}/>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Link to="/review"><button className="btn-add-cart" onClick={handlePlaceBtn}>Place Order</button></Link>
            </div>
        </div>
    );
};

export default Review;