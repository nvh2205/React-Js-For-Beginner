import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import InputCodeSale from '../../../../custom-fields/InputCodeSale'
Total.propTypes = {
    cart: PropTypes.array
};

Total.defaultProps = {
    cart: []
}

function Total(props) {

    const { cart } = props;
    const dispatch= useDispatch();
    const [codeSale, setCodeSale] = useState([
        {
            title: 'freeShip',
            name: 'Giảm giá sinh nhật Shop:FreeShip',
            value: 15
        },
        {
            title: 'sale20',
            name: 'Giảm giá sản phẩm 8/8 : 20%',
            value: 0.2
        }
    ])

    const [priceSale, setPriceSale] = useState(0);

    const initialValues = {
        titleSale: ''
    }

    //Total Product in cart
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



    //Apply code
    const validationSchema = Yup.object().shape({
        titleSale: Yup.string().matches(/^freeShip|sale20$/, 'CODE KHÔNG HỢP LỆ!'),
        

    })



    const onSubmit = (value) => {
        codeSale.map((item, index) => {
            if (value.titleSale === 'freeShip'==item.title) {
                setPriceSale(15)
            }
            else if (item.title == value.titleSale) {
                const applySale={};
                applySale.sale=item;
                
                localStorage.setItem('applySale', JSON.stringify(item))
                setPriceSale(item.value)
            }
        })
    }

    const showDiscountCode=(priceSale,cart) =>{
        if(priceSale>1){
            return priceSale
        }
        else{
            let result =totalPrice(cart);
            return result*priceSale
        }
    }

    const totalOrder=(priceSale,cart)=>{
       let totalProduct=totalPrice(cart);
       let discountCode = showDiscountCode(priceSale,cart);
       return totalProduct-discountCode;
    }

    const reasonForTheDiscount=(codeSale,priceSale) =>{
        let result=null;
        codeSale.map((item, index) =>{
            if(item.value===priceSale){
                result=item.name;
            }
        })
        return result;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="coupon-discount box-shadow p-30 mb-50">
                    <h6 className="widget-title border-left mb-20">Code giảm giá</h6>
                    <p>Bạn đang có mã giảm giá! Nhập ngay thôi</p>
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formikProps => {
                            const { isSubmitting } = formikProps

                            return (
                                <Form>
                                    <FastField
                                        name="titleSale"
                                        component={InputCodeSale}
                                        placeholder="Nhập code"

                                    />
                                    <FormGroup>
                                        <button class="submit-btn-1  btn-hover-1" type="submit" >Áp dụng</button>
                                    </FormGroup>

                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
            <div className="col-md-6">
                <div className="payment-details box-shadow p-30 mb-50">
                    <h6 className="widget-title border-left mb-20">Chi tiết hóa đơn</h6>
                    <table>
                        <tbody><tr>
                            <td className="td-title-1">Giá trị đơn hàng</td>
                            <td className="td-title-2">${totalPrice(cart)}</td>
                        </tr>
                            <tr>
                                <td className="td-title-1">Phí Ship</td>
                                <td className="td-title-2">$15.00</td>
                            </tr>
                            <tr>
                                <td className="td-title-1">Mã giảm giá({reasonForTheDiscount(codeSale,priceSale)})</td>
                                <td className="td-title-2">- ${showDiscountCode(priceSale,cart)}</td>
                            </tr>
                            <tr>
                                <td className="order-total">Tổng cộng</td>
                                <td className="order-total-price">${totalOrder(priceSale,cart)}</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>
    );
}

export default Total;