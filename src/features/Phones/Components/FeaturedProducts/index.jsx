import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

FeaturedProducts.propTypes = {
    addToCart: PropTypes.func
};

FeaturedProducts.defaultProps = {
    addToCart: null
}

function FeaturedProducts(props) {

    const{addToCart} = props;

    const phones = useSelector(state => state.phones)


    const listHotPhones=[];
    phones.map((items) => {
        items.list.map((item) => {
            listHotPhones.push(item);
    
        })

    })
  
    // const list=[];
    //  listHotPhones.map((items) =>{
        
    //     items.listProducts.map((item)=>{
    //         list.push(item)
    //     })
    // })

    // console.log(list)

    const [hotPhones, setHotPhones] = useState(listHotPhones)
    
    const clickAddToCart = (item,idParent) => {
        addToCart(item,idParent)
    }

    //rating
    const showRating = (product) => {
        const result = [];

        let rating = product.rating;
        if (Number.isInteger(rating) == false) {
            rating -= 1;
        }

        for (let i = 0; i < rating; i++) {
            result.push(<span key={i + 1} className="rating-custom"> <i  class="zmdi zmdi-star"></i></span>)
        }

        if (Number.isInteger(rating) == false) {
            rating += 2;
            result.push(<span key="0" className="rating-custom"> <i  class="zmdi zmdi-star-half"></i></span>)
        }

        for (let i = 0; i < 5 - rating; i++) {

            result.push(<span key={5 + i + 2}  className="rating-custom"> <i class="zmdi zmdi-star-outline"></i></span>)
        }



        return result
    }

    const finalPrice = (product) => {
        let result = null
        const showPrice = [];
        if (product.sale) {
            result = product.price - product.price * product.sale * 0.01
            showPrice.push(<h4 key={product.id} style={{textDecorationLine: 'line-through', display: 'inline-block', borderRight: '15px'}}>$ {product.price}</h4>)
            showPrice.push(<h3 key={`${product.id}`+`${product.name}`}className="pro-price" style={{display: 'inline-block'}}>.    $ {result}</h3>)

        }
        else{
            showPrice.push(<h3 key={product.id}  className="pro-price" style={{display: 'inline-block'}}>.    $ {result}</h3>)
        }
        

        return showPrice
    }

    return (
        <section id="page-content" className="page-wrapper">
            {/* PRODUCT TAB SECTION START */}
            <div className="product-tab-section section-bg-tb pt-80 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="section-title text-left mb-40">
                                <h2 className="uppercase">Sản phẩm nổi bật</h2>
                                <h6>Top Iphone bán chạy nhất </h6>
                            </div>
                        </div>

                    </div>
                    <div className="product-tab">
                        {/* Tab panes */}
                        <div className="tab-content">
                            {/* popular-product start */}
                            <div className="tab-pane active" id="popular-product">
                                <div className="row">
                                    {/* product-item start */}
                                    {/* <div className="col-md-3 col-sm-4 col-xs-12">
                                        <div className="product-item product-item-2">
                                            <div className="product-img">
                                                <a href="single-product.html">
                                                    <img src="assets/img/Iphone/12-Series/12-Blue.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">
                                                    <a href="single-product.html">Iphone 12 PRO MAX || 128GB</a>
                                                </h6>
                                                <h6 className="brand-name">Sumsung</h6>
                                                <h3 className="pro-price">$ 869.00</h3>
                                            </div>
                                            <ul className="action-button">
                                                <li>
                                                    <a href="#" title="Wishlist"><i className="zmdi zmdi-favorite" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" data-toggle="modal" data-target="#productModal" title="Quickview"><i className="zmdi zmdi-zoom-in" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Compare"><i className="zmdi zmdi-refresh" /></a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    {/* product-item end */}
                                    {/* product-item start */}

                                    {hotPhones.map((item, index) => (
                                        <div key={item.id} className="col-md-3 col-sm-4 col-xs-12">
                                            <div className="product-item product-item-2">
                                                <div className="product-img">
                                                    <NavLink to={`/phones/products/single/${item.id}`}>
                                                        <img src={item.listProducts[item.selectedProduct-1].photo} alt="" />
                                                    </NavLink>
                                                </div>
                                                <div className="product-info">
                                                    <h6 className="product-title">
                                                        <NavLink to={`/phones/products/single/${item.id}`}>{item.listProducts[item.selectedProduct-1].name}</NavLink>
                                                    </h6>
                                                    <h6 className="brand-name">APPLE</h6>
                                                    <h3 className="pro-price"><div>{finalPrice(item.listProducts[item.selectedProduct-1])}</div></h3>
                                                </div>
                                                <ul className="action-button">
                                                    <li>
                                                        {showRating(item.listProducts[item.selectedProduct-1])}
                                                    </li>
                                                    <li>
                                                        <button type="button" className="" onClick={()=>{clickAddToCart(item.listProducts[item.selectedProduct-1],item.id)}}>
                                                            <a href="#" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus" /></a>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}

                                    {/* product-item end */}
                                    {/* product-item start */}

                                    {/* product-item end */}
                                </div>
                            </div>
                            {/* special-offer end */}
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
}

export default FeaturedProducts;