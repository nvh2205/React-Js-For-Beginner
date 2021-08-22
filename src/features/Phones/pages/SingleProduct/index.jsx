import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import useScript from '../../../../utils/useScript.js'
import { addProduct } from '../../../Cart/CartSlice.js';
import Banner from '../../../../components/Banner'
import DetailProduct from '../../Components/DetailProduct'
import PhotoDetailProduct from '../../Components/PhotoDetailProduct'
import Description from '../../Components/Description'
import RelatedProduct from '../../Components/RelatedProduct'
import TableInfoProduct from '../../Components/TableInfoProduct'

SingleProduct.propTypes = {

};

function SingleProduct(props) {


    const phoneId = useParams();
    const history = useHistory()
    const phones = useSelector(state => state.phones)
    const listPhone = [];
    const dispatch = useDispatch();

    phones.map((items) => {
        items.list.map((item) => {
            listPhone.push(item);
        })

    })



    const [detailPhone, setDetailPhone] = useState(listPhone.find((item) => (
        item.id == phoneId.id
    )))

    // let detailPhone = listPhone.find((item) => (
    //     item.id == phoneId.id
    // ));


    const handleClickOptions = (option) => {
        const result = detailPhone.listProducts.findIndex(item => option.color === item.color && option.memory === item.memory);

        setDetailPhone({
            ...detailPhone,
            selectedProduct: result + 1
        })

        //detailPhone.selectedProduct=result + 1; 

    }

    useEffect(() => {
        const result = listPhone.find((item) => (
            item.id == phoneId.id
        ))
        setDetailPhone(result)

    }, [phoneId.id])

    //Next page to show product
    const nextPage = (idProduct) => {
        history.push(`/phones/products/single/${idProduct}`)
    }

    useScript('/assets/js/main.js');

    //add to card
    const addToCart = (product, idParent) => {
        const buyProduct = Object.assign({ idParent: idParent, quantity: 1 }, product);
        const action = addProduct(buyProduct)
        dispatch(action);

        history.push('/cart')
    }

    return (
        <div>
            <Banner/>
            <section id="page-content" className="page-wrapper">
                {/* SHOP SECTION START */}
                <div className="shop-section mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-xs-12">
                                {/* single-product-area start */}
                                <div className="single-product-area mb-80">
                                    <div className="row">
                                        {/* imgs-zoom-area start */}
                                        <div className="col-md-5 col-sm-5 col-xs-12">
                                            <PhotoDetailProduct detailPhone={detailPhone} />

                                        </div>
                                        {/* imgs-zoom-area end */}
                                        {/* single-product-info start */}
                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                            <DetailProduct detailPhone={detailPhone} handleClickOptions={handleClickOptions} addToCart={addToCart} />
                                        </div>


                                        {/* single-product-info end */}
                                    </div>
                                    {/* single-product-tab */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* hr */}
                                            <hr />
                                            <Description detailPhone={detailPhone} />
                                            {/*  hr */}
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                {/* single-product-area end */}
                                <RelatedProduct detailPhone={detailPhone} nextPage={nextPage} />
                            </div>
                            <div className="col-md-3 col-xs-12">
                                <TableInfoProduct detailPhone={detailPhone} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* SHOP SECTION END */}
            </section>
        </div>

        // <div>
        //     <Banner/>
        //     <DetailProduct detailPhone={detailPhone} handleClickOptions={handleClickOptions}/>
        //     <h1>aaaaaaaaaaaaaaaa</h1>
        // </div>
    );
}

export default SingleProduct;