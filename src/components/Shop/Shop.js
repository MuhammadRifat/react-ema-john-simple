import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} key={pd.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>This is Cart</h2>
            </div>
        </div>
    );
};

export default Shop;