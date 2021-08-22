import React from 'react';
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeProduct} from '../../features/Cart/CartSlice'
CartHeader.propTypes = {

};

function CartHeader(props) {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    


    const finalPrice = (product) => {
        let result = null;
        result = product.sale ? (product.price - product.price * product.sale * 0.01) : product.price
        return result;
    }
    //Total Cart

    const totalPrice = (cart) => {
        let result = null;
        result = cart.reduce((accumulator, item) => {
            if (item.sale) {
                return accumulator + (item.price - item.price * item.sale * 0.01) * item.quantity
            }
            else {
                return accumulator + (item.price) * item.quantity
            }
        }, 0)

        return result.toFixed(2);
    }

    const handleRemoveProduct=(productId) => {
        const action=removeProduct(productId);
        dispatch(action);
    }

    const cartInfomation = (cart) => {
        const result = cart.map((item, index) => {
            return (


                <div key={index} className="single-cart clearfix">
                    <div className="cart-img f-left">
                        <Link to={`phones/products/${item.idParent}`}>
                            <img style={{ width: '111px', height: '100px' }} src={item.photo} alt="Cart Product" />
                        </Link>
                        <div className="del-icon">

                            <Link onClick={() =>handleRemoveProduct(item.id)} to="#">
                                <i className="zmdi zmdi-close" />
                            </Link>


                        </div>
                    </div>
                    <div className="cart-info f-left">
                        <h6 className="text-capitalize">
                            <Link to={`phones/products/${item.idParent}`}>{item.name}</Link>
                        </h6>
                        <p>
                            <span>Quanti<strong>:</strong></span>0{item.quantity}

                        </p>
                        <p>
                            <span>Color <strong>:</strong></span>{item.color}
                        </p>

                        <p>
                            <span>Price <strong>:</strong></span>${finalPrice(item)* item.quantity}
                        </p>

                    </div>
                </div>

            )
        })
        return result;
    }

    return (
        <div className="total-cart f-left">
            <div className="total-cart-in">
                <div className="cart-toggler">
                    <Link to="/cart">
                        <span className="cart-quantity">0{cart.length}</span><br />
                        <span className="cart-icon">
                            <i className="zmdi zmdi-shopping-cart-plus" />
                        </span>
                    </Link>
                </div>
                <ul>
                    <li>
                        <div className="top-cart-inner your-cart">
                            <h5 className="text-capitalize">Giỏ hàng của bạn</h5>
                        </div>
                    </li>
                    <li>
                        <div className="total-cart-pro">
                            {/* single-cart */}
                            
                            {cartInfomation(cart)}
                            {/* single-cart */}

                        </div>
                    </li>
                    <li>
                        <div className="top-cart-inner subtotal">
                            <h4 className="text-uppercase g-font-2">
                                Total  =
                                <span>$ {totalPrice(cart)}</span>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="top-cart-inner view-cart">
                            <h4 className="text-uppercase">
                                <Link to="/cart">Xem Giỏ Hàng</Link>
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CartHeader;