import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
            <div className="product-details">
                <div className="product-img">
                    <img src={img} alt=""/>
                </div>
                <div className="product-description">
                    <h4>{name}</h4>
                    <div className="product-info">
                    <div className="product-info-div1">
                        <p>by: {seller}</p>
                        <p>${price}</p>
                        <small>only {stock} left in stock - order soon</small>
                        <button className="btn-add-cart">add to cart</button>
                    </div>
                    <div className="product-info-div2">
                        <strong>Features</strong>
                        <ul>
                            {
                                props.product.features.map(feature => <li><small>{feature.description}: {feature.value}</small></li>)
                            }
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            )
        }

export default Product;