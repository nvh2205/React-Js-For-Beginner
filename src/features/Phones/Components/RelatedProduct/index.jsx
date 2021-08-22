import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { NavLink, useRouteMatch, useHistory, Link } from 'react-router-dom'

RelatedProduct.propTypes = {
    detailPhone: PropTypes.object,
    nextPage: PropTypes.func
};

RelatedProduct.defaultProps = {
    detailPhone: {},
    nextPage: null
}

function RelatedProduct(props) {

    const { detailPhone,nextPage } = props;



    //...Phone
    const phones = useSelector(state => state.phones)

    const listPhone = [];
    phones.map((items) => {
        items.list.map((item) => {
            listPhone.push(item)
        })

    })

    const index = listPhone.findIndex(item => detailPhone.id === item.id)
    listPhone.splice(index, 1);


    //Random 1 so 
    const randomNumber = (a, b) => (
        Math.random() * (b - a) + a
    )

    const listPhoneRelated = listPhone.splice(0, 3)



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
            showPrice.push(<h4 key={product.id} style={{ textDecorationLine: 'line-through', display: 'inline-block', borderRight: '15px' }}>$ {product.price}</h4>)
            showPrice.push(<h3 key={`${product.id}` + `${product.name}`} className="pro-price" style={{ display: 'inline-block' }}>.    $ {result}</h3>)

        }
        else {
            showPrice.push(<h3 key={product.id} className="pro-price" style={{ display: 'inline-block' }}>.    $ {result}</h3>)
        }


        return showPrice
    }

    const handleClickNextPage=(idProduct)=>{
        nextPage(idProduct)
    }


    return (
        <div className="related-product-area">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-left mb-40">
                        <h2 className="uppercase">Sản phẩm liên quan</h2>
                        <h6>Toàn iphone hot giá rẻ</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="active-related-product">
                    {/* product-item start */}
                    {listPhoneRelated.map((item, index) => (
                        <div key={index} className="col-xs-12">
                            <div className="product-item">
                                <div className="product-img">
                                   
                                        <img onClick={()=>handleClickNextPage(item.id)} src={item.listProducts[item.selectedProduct - 1].photo} alt="" style={{cursor:'pointer'}}/>
                                    
                                    {/* <img onClick={()=>handleClick(item.id)} src={item.listProducts[item.selectedProduct - 1].photo} alt="" /> */}
                                </div>
                                <div className="product-info">
                                    <h6 className="product-title">
                                        <p className="custom-product-title" onClick={()=>handleClickNextPage(item.id)}>{item.listProducts[item.selectedProduct - 1].name}</p>
                                    </h6>
                                    <div className="pro-rating">
                                        {showRating(item.listProducts[item.selectedProduct - 1])}
                                    </div>
                                    {finalPrice(item.listProducts[item.selectedProduct - 1])}
                                    <ul className="action-button">

                                        <li>
                                            <Link to="/phones" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* product-item end */}
                    {/* product-item start */}

                    {/* product-item end */}
                </div>
            </div>
        </div>
    );
}

export default RelatedProduct;