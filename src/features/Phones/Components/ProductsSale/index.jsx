import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './style.css'

import CountdownTimer from '../CountdownTimer'
ProductSale.propTypes = {

};

function ProductSale(props) {
    const {addToCart}= props;
    const phones = useSelector(state => state.phones)

    const listPhone = [];
    phones.map((items) => {
        items.list.map((item) => {
            listPhone.push(item)
        })

    })

    const [listPhoneSale, setListPhoneSale] = useState(listPhone);

    //Show Rating
    //rating
    const showRating = (product) => {
        const result = [];

        let rating = product.rating;
        if (Number.isInteger(rating) == false) {
            rating -= 1;
        }

        for (let i = 0; i < rating; i++) {
            result.push(<span key={i + 1} className="rating-custom"> <i class="zmdi zmdi-star"></i></span>)
        }

        if (Number.isInteger(rating) == false) {
            rating += 2;
            result.push(<span key="0" className="rating-custom"> <i class="zmdi zmdi-star-half"></i></span>)
        }

        for (let i = 0; i < 5 - rating; i++) {

            result.push(<span key={5 + i + 2} className="rating-custom"> <i class="zmdi zmdi-star-outline"></i></span>)
        }



        return result
    }

    const finalPrice = (product) => {
        let result = null
        result = (product.price - product.price * product.sale * 0.01).toFixed(2);

        return result
    }

    const clickAddToCart = (item, idParent) => {
        addToCart(item, idParent)
    }

    return (
        <div className="featured-product-section mb-50">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-left mb-40">
                            <h2 className="uppercase">FLASH SALE</h2>
                            <h6>Săn sale mỗi ngày nào 🤗🤗</h6>
                        </div>
                    </div>
                    <CountdownTimer />
                </div>

                <div className="featured-product">
                    <div className="row active-featured-product slick-arrow-2">
                        {/* product-item start */}
                        {listPhoneSale.map((item, index) => (

                            <div key={item.id} className="col-xs-12 banner-1">
                                <div class="ribbon-price ">
                                    <span>$ {finalPrice(item.listProducts[item.selectedProduct - 1])}</span>
                                </div>
                                <div className="product-item">
                                    <div className="product-img">
                                        <NavLink to={`/phones/products/single/${item.id}`}>
                                            <img src={item.listProducts[item.selectedProduct - 1].photo} alt="" />
                                        </NavLink>
                                    </div>
                                    <div className="product-info">
                                        <h6 className="product-title">
                                            <NavLink to={`/phones/products/single/${item.id}`}>{item.listProducts[item.selectedProduct - 1].name}</NavLink>
                                        </h6>
                                        <div className="pro-rating">
                                            {showRating(item.listProducts[item.selectedProduct - 1])}
                                        </div>
                                        <h3 style={{ display: 'block' }}>
                                        </h3>
                                        <h4 style={{ textDecorationLine: 'line-through', display: 'inline-block', borderRight: '15px' }}>$ {item.listProducts[item.selectedProduct - 1].price}
                                        </h4>
                                        <h3 style={{ display: 'inline-block' }}>.    -{item.listProducts[item.selectedProduct - 1].sale}%</h3>
                                        <h3 class="pro-price">$ {finalPrice(item.listProducts[item.selectedProduct - 1])}</h3>
                                        <ul className="action-button">

                                            <li>
                                                <button type="button" className="" onClick={() => { clickAddToCart(item.listProducts[item.selectedProduct - 1], item.id) }}>
                                                    <a href="#" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus" /></a>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div >

    );
}

export default ProductSale;