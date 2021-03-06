import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, key} = props.product;
    return (
            <div className="product-details">
                <div className="product-img">
                    <img src={img} alt=""/>
                </div>
                <div className="product-description">
                    <h4><Link to={"/product/"+ key}>{name}</Link></h4>
                    <div className="product-info">
                    <div className="product-info-div1">
                        <p>by: {seller}</p>
                        <p>${price}</p>
                        <small>only {stock} left in stock - order soon</small><br></br>
                        {props.showAddToCart && <button className="btn-add-cart" onClick={() => props.handlerAddCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
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