import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useScript from '../../utils/useScript'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import InforCart from './Components/InforCart'
import Total from './Components/Total'
import FormInforUser from './Components/FormInforUser'
import { removeProduct, dscQuantityProduct, iscQuantityProduct, updateQuantityProduct } from './CartSlice'
import { pushProductInCart } from '../Oder/OderSlice'
import Banner from '../../components/Banner'
Cart.propTypes = {

};

function Cart(props) {
    //useScript('/assets/js/main.js')
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();
    //formik
    const initialValues = {
        name: '',
        phone: '',
        provinceCode: null,
        districtCode: null,
        wardCode: null
    }

    const cartRemove = (productId) => {
        const action = removeProduct(productId.id);
        dispatch(action)
    }

    const dscQuantity = (product) => {
        const action = dscQuantityProduct(product.id);
        dispatch(action)
    }

    const iscQuantity = (product) => {
        const action = iscQuantityProduct(product.id);
        dispatch(action)
    }

    const changeQuantity = (quantityProduct) => {
        const action = updateQuantityProduct(quantityProduct)
        dispatch(action)
    }



    const handleSubmit = (value) => {
        return new Promise((resolve, reject) => {

            const oderSucces = {}
            oderSucces.cart = cart;
            oderSucces.address = value;
            oderSucces.sale = localStorage.getItem('applySale') ? JSON.parse(localStorage.getItem('applySale')) : { value: 0 }

            //localStorage.setItem('OderUser', JSON.stringify(value))

            setTimeout(() => {
                const action = pushProductInCart(oderSucces);
                dispatch(action)

                history.push('/oder')
                resolve(true)
            }, 2000)
        })

    }

    useEffect(() => {
        return () => localStorage.removeItem("applySale");

    })



    return (
        <div>
            <Banner />
            <section id="page-content" className="page-wrapper">
                {/* SHOP SECTION START */}{cart.length > 0 ?
                    <div className="shop-section mb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    {/* Tab panes */}
                                    <div className="tab-content">
                                        {/* shopping-cart start */}
                                        <div className="tab-pane active" id="shopping-cart">
                                            <div className="shopping-cart-content">
                                                <div className="table-content table-responsive mb-50">
                                                    <table className="text-center">
                                                        <thead>
                                                            <tr>
                                                                <th className="product-thumbnail">Sản Phẩm</th>
                                                                <th className="product-price">Giá tiền</th>
                                                                <th className="product-quantity">Số lượng</th>
                                                                <th className="product-subtotal">Tổng Cộng</th>
                                                                <th className="product-remove">Xóa sản phẩm</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cart.map((item, index) => (
                                                                <InforCart key={index} item={item} cartRemove={cartRemove}
                                                                    dscQuantity={dscQuantity}
                                                                    iscQuantity={iscQuantity}
                                                                    changeQuantity={changeQuantity}
                                                                />
                                                            ))}
                                                            {/* tr */}

                                                            {/* tr */}
                                                        </tbody>
                                                    </table>
                                                </div>


                                                <Total cart={cart} />
                                                <FormInforUser initialValues={initialValues}
                                                    onSubmit={handleSubmit}
                                                />



                                            </div>
                                        </div>
                                        {/* shopping-cart end */}
                                        {/* wishlist start */}
                                        {/* wishlist end */}
                                        {/* checkout start */}

                                        {/* checkout end */}
                                        {/* order-complete start */}

                                        {/* order-complete end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="thank-you p-30 text-center">
                        <h1 className="p-3 border bg-light">
                            GIỎ HÀNG CỦA BẠN ĐANG TRỐNG QUAY LẠI MUA HÀNG ĐI NHA😉😉
                        </h1>

                    </div>
                }

                {/* SHOP SECTION END */}
            </section>

        </div>

    );
}

export default Cart;