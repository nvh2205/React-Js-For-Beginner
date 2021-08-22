import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
InforCart.propTypes = {
    item: PropTypes.object,
    cartRemove: PropTypes.func,
    dscQuantity: PropTypes.func,
    iscQuantity: PropTypes.func,
    changeQuantity:PropTypes.func,
};

InforCart.defaultProps = {
    item: {},
    cartRemove: null,
    dscQuantity: null,
    iscQuantity: null,
    changeQuantity:null
}

function InforCart(props) {
    const { item, cartRemove, dscQuantity, iscQuantity,changeQuantity } = props;
    const [quantity, setQuantity] = useState(item.quantity);

    const saleProduct = (product) => {
        let result = null;
        result = product.sale ? <div key={product.id}>
            <p style={{ textDecorationLine: 'line-through' }}>${product.price}</p>
            <h4>${(product.price - product.price * product.sale * 0.01).toFixed(2)}</h4>
        </div> : <div key={product.id}>
            <h4>${product.price}</h4>
        </div>

        return result;
    }

    const finalPrice = (product) => {
        let result = null;
        result = product.sale ? (product.price - product.price * product.sale * 0.01) : product.price
        return result;
    }

    const handleCartRemoveClick = (productId) => {
        cartRemove(productId)
    }

    const handleDsc = (product) => {
        if (product.quantity > 0) {
            dscQuantity(product)
        }
    }
    const handleIsc = (product) => {
        iscQuantity(product)
    }
    const handleChangeInput = (e) => {
        let target = e.target;
        const value = target.value;
       setQuantity(value);
    }
    const handleOnblurInput= () =>{
        const value = {
            id:item.id,
            quantity
        }
        changeQuantity(value);
    }
    
    useEffect(()=>{
        setQuantity(item.quantity)
    },[item.quantity])

    return (

        <tr>
            <td className="product-thumbnail">
                <div className="pro-thumbnail-img">
                    <img src={item.photo} alt="" />
                </div>
                <div className="pro-thumbnail-info text-left">
                    <h6 className="product-title-2">
                        <Link to={`phones/products/single/${item.idParent}`}>{item.name}</Link>
                    </h6>
                    <p>APPLE</p>
                    <p>Memory: {item.memory}</p>
                    <p>COLOR: {item.color.toUpperCase()}</p>
                </div>
            </td>
            <td className="product-price">
                <div>
                    {saleProduct(item)}
                </div>

            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus f-left">
                    <div class="dec qtybutton" onClick={() => handleDsc(item)}>-</div>
                    <input type="text" value={quantity}  name="qtybutton" className="cart-plus-minus-box" onChange={handleChangeInput} onBlur={handleOnblurInput}/>
                    <div class="inc qtybutton" onClick={() => handleIsc(item)}>+</div>
                </div>
            </td>
            <td className="product-subtotal">${finalPrice(item) * item.quantity}</td>
            <td className="product-remove">
                <a href="#" onClick={() => handleCartRemoveClick(item)}><i className="zmdi zmdi-close" /></a>
            </td>
        </tr>

    );
}

export default InforCart;