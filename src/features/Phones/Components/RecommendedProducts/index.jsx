import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


RecommendedProducts.propTypes = {
    arrPhone: PropTypes.array,
};

RecommendedProducts.defaultProps = {
    arrPhone: []
}

function RecommendedProducts(props) {

    const { arrPhone } = props;
    const listPhone = [];
    for(let i = 0; i < 3; i++) {
        listPhone.push(arrPhone[i]);
    }
    const finalPrice = (product) => {
        let result = null;
        result = product.sale ? (product.price - product.price * product.sale * 0.01) : product.price
        return result;
    }
    return (
        <aside className="widget widget-product box-shadow">
            <h6 className="widget-title border-left mb-20">Sản phẩm Nổi bật</h6>
            {/* product-item start */}
            {listPhone.map((item, index) => (
                <div className="product-item" key={index}>
                    <div className="product-img">
                        <Link to={`/phones/products/single/${item.id}`}>
                            <img src={item.listProducts[item.selectedProduct-1].photo} alt="" />
                        </Link>
                    </div>
                    <div className="product-info">
                        <h6 className="product-title">
                            <Link to={`/phones/products/single/${item.id}`}>{item.listProducts[item.selectedProduct-1].name}</Link>
                        </h6>
                        <h3 className="pro-price">$ {finalPrice(item.listProducts[item.selectedProduct-1]).toFixed(2)}</h3>
                    </div>
                </div>
            ))}
        </aside>
    );
}

export default RecommendedProducts;