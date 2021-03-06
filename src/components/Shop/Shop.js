import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    const [databaseCart, setDatabaseCart] = useState([]);
    useEffect( () => {
        const dataCart = getDatabaseCart();
        const productKeys = Object.keys(dataCart);
        const products = fakeData;
        const cartProducts = productKeys.map(key => {
            const product = products.find(product => product.key === key);
            product.quantity = dataCart[key];
            return product;
        })
        setDatabaseCart(cartProducts);
    }, [])

    const handlerAddCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
        
        const dataCart = getDatabaseCart();
        const productKeys = Object.keys(dataCart);
        const products = fakeData;
        const cartProducts = productKeys.map(key => {
            const product = products.find(product => product.key === key);
            product.quantity = dataCart[key];
            return product;
        })
        setDatabaseCart(cartProducts);
    };
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} handlerAddCart ={handlerAddCart} showAddToCart={true}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={databaseCart}></Cart>
                <Link to="/review"><button className="btn-add-cart">Order review</button></Link>
            </div>
        </div>
    );
};

export default Shop;