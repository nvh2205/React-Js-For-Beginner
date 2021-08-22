import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Address from './Components/Address'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'reactstrap'

import Bill from './Components/Bill'
import { removeAllProduct } from '../Cart/CartSlice'
import { removeOrder } from './OderSlice'
import Banner from '../../components/Banner'

Oder.propTypes = {

};

function Oder(props) {

    const oder = useSelector(state => state.oder)
    const dispatch = useDispatch()
    const { address, cart, sale } = oder.length > 0 ? oder[0] : {};


    //Delete locolStorage in cart 
    useEffect(() => {

        const action = removeAllProduct();
        dispatch(action)
        return () => localStorage.removeItem("productInCart");
    }, [])

    useEffect(() => {
        return () => {
            const action = removeOrder();
            dispatch(action)
        }
    })



    return (
        <div>
            <Banner />
            <div className="tab-pane active" id="order-complete">

                {oder.length > 0 ?
                    <div className="order-complete-content box-shadow">
                        <div className="thank-you p-30 text-center">
                            <h6 className="text-black-5 mb-0">Thank You </h6>
                        </div>

                        <div className="row">
                            {/* our order */}
                            <Bill cart={cart} sale={sale} />
                            <div className="col-md-6">

                                <div className="bill-details p-30">
                                    <h6 className="widget-title border-left mb-20">Hieu.N Store-- Iphone</h6>
                                    <ul className="bill-address">
                                        <li>
                                            <span>Address:</span>
                                            Hà Nội
                                        </li>
                                        <li>
                                            <span>email:</span>
                                            nvh2205@gmail.com
                                        </li>
                                        <li>
                                            <span>phone : </span>
                                            0367551262
                                        </li>
                                    </ul>
                                </div>

                                <Address address={address} />
                            </div>
                        </div>
                    </div>
                    : <div className="thank-you p-30 text-center">
                        <h1 className="p-3 border bg-light">
                            Bạn ko có đơn hàng nào
                        </h1>

                    </div>
                }




            </div>
        </div>

    );
}

export default Oder;