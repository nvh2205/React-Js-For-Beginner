import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
ListOfAllProducts.propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func

};

ListOfAllProducts.defaultProps = {
    product: {},
    addToCart: null

}

function ListOfAllProducts(props) {

    const { product,addToCart } = props;


    const phone = product.listProducts[product.selectedProduct - 1]
    //console.log(phone);
    //rating
    const showRating = (product) => {
        const result = [];

        let rating = product.rating;
        if (Number.isInteger(rating) == false) {
            rating -= 1;
        }

        for (let i = 0; i < rating; i++) {
            result.push(<i key={i + 1} class="zmdi zmdi-star"></i>)
        }

        if (Number.isInteger(rating) == false) {
            rating += 2;
            result.push(<i key="0" class="zmdi zmdi-star-half"></i>)
        }

        for (let i = 0; i < 5 - rating; i++) {

            result.push(<i key={5 + i + 2} class="zmdi zmdi-star-outline"></i>)
        }



        return result
    }

    //Price
    const finalPrice = (product) => {
        let result = null
        const showPrice = [];

        if (product.sale) {
            result = product.price - product.price * product.sale * 0.01
            showPrice.push(<h4 key={product.id} style={{ textDecorationLine: 'line-through', display: 'inline-block', borderRight: '15px' }}>$ {product.price}</h4>)
            showPrice.push(<h3 key={`${product.id}` + `${product.name}`} className="pro-price" style={{ display: 'inline-block' }}>.    $ {result}</h3>)

        }
        else {
            showPrice.push(<h3 key={product.id} className="pro-price" style={{ display: 'inline-block' }}>    $ {product.price}</h3>)
        }


        return showPrice
    }

    const clickAddToCart = (item, idParent) => {
        addToCart(item, idParent)
    }

    return (
        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="product-item">
                <div className="product-img">
                    <Link to={`/phones/products/single/${product.id}`}>
                        <img src={phone.photo} alt="" />
                    </Link>
                </div>
                <div className="product-info">
                    <h6 className="product-title">
                        <Link to={`/phones/products/single/${product.id}`}>{phone.name} </Link>
                    </h6>
                    <div className="pro-rating">
                        {showRating(phone)}
                    </div>
                    <h3 className="pro-price"><div>{finalPrice(phone)}</div></h3>
                    <ul className="action-button">
                        <li>
                            <button type="button" className="" onClick={() => { clickAddToCart(phone,product.id) }}>
                                <a href="#" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus" /></a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListOfAllProducts;