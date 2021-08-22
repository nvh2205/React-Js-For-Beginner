import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
DetailProduct.propTypes = {
    detailPhone: PropTypes.object,
    handleClickOptions: PropTypes.func,
    addToCart: PropTypes.func,
};

DetailProduct.defaultProps = {
    detailPhone: {},
    handleClickOptions: null,
    addToCart:null
}

function DetailProduct(props) {

    const { detailPhone, handleClickOptions,addToCart } = props;


    const { color, memory } = detailPhone.listProducts[detailPhone.selectedProduct - 1]
    const option = {
        color,
        memory,
    }


    // const [option,setOption] = useState({
    //    color,
    //    memory,
    // })


    //Filter optione of product
    const filterDuplicatePhone = (product, property) => {

        const result = [];
        let checkSelectProduct = null;

        const checkOption = {}

        Object.keys(option).map((item) => {
            if (item !== property) {
                checkOption[item] = option[item]

            }
        });

        const arrProduct = product.listProducts.map((item, index, arr) => {
            checkSelectProduct = arr[product.selectedProduct - 1][[`${property}`]]
            return item[`${property}`]
        })

        const uniqueSet = new Set(arrProduct);
        const backToArray = [...uniqueSet];
        backToArray.map((item, index) => {
            checkOption[property] = item;
            const checkResult = product.listProducts.findIndex(item => checkOption.color === item.color && checkOption.memory === item.memory);
            if (checkResult === -1) {
                result.push(<li key={index} className='not-allowed box-1'>{item}</li>)
            }
            else {
                result.push(<li key={index} className='box-1'
                    onClick={() => onHandleClickOption(property, item)}>{item} {item === checkSelectProduct ? <FontAwesomeIcon icon={faCheck} /> : ''} </li>)
            }

        })

        return result;
    }

    const onHandleClickOption = (property, value) => {


        const selectOption = {
            ...option,
            [property]: value
        }

        handleClickOptions(selectOption);

        // setOption({
        //     ...option,
        //     [property]:value
        // })
    }

    //final price
    const finalPrice = (product) => {
        let result = null
        let showPrice = null;
        if (product.sale) {
            result = product.price - product.price * product.sale * 0.01
            showPrice = (
                <div style={{ display: 'block' }}>
                    <h3 style={{ display: 'inline-block', marginRight: '1rem' }}>Price: </h3>
                    <h4 style={{ textDecorationLine: 'line-through', display: 'inline-block', borderRight: '15px', marginRight: '1rem' }}>${product.price}</h4>
                    <h3 className="sale-price">    -{product.sale}%</h3>
                    <h3 className="pro-price"><FontAwesomeIcon icon={faArrowCircleRight} /> ${result}</h3>
                </div>
            )

        }
        else {
            showPrice = <div>
                <h3 class="pro-price" style={{ marginRight: '1rem' }}>Price: ${product.price}--(Cái này không có sale đâu 😄😄)</h3>
            </div>
        }


        return showPrice
    }

    //handle add cart
    const clickAddToCart = (item,idParent) => {
        addToCart(item,idParent)
    }

    return (
        <div className="single-product-info">
            <h3 className="text-black-1">{detailPhone.listProducts[detailPhone.selectedProduct - 1].name}</h3>
            <h6 className="brand-name-2">{detailPhone.title}</h6>
            {/*  hr */}
            <div className="single-pro-color-rating clearfix">
                <div className="sin-pro-color f-left">
                    <p className="color-title f-left">Memory</p>
                    <div className="widget-color f-left">

                        <ul className="box">
                            {filterDuplicatePhone(detailPhone, 'memory')}

                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            {/* single-pro-color-rating */}
            <div className="single-pro-color-rating clearfix">
                <div className="sin-pro-color f-left">
                    <p className="color-title f-left">Color</p>
                    <div className="widget-color f-left">
                        <ul className="box">
                            {filterDuplicatePhone(detailPhone, 'color')}

                        </ul>
                    </div>
                </div>
            </div>
            {/* hr */}
            <hr />
            {/* plus-minus-pro-action */}
            
            {/* plus-minus-pro-action end */}
            {/* hr */}
           
            {/* single-product-price */}
            {finalPrice(detailPhone.listProducts[detailPhone.selectedProduct - 1])}
            {/*  hr */}
            <hr />
            <div>
                <a onClick={()=>clickAddToCart(detailPhone.listProducts[detailPhone.selectedProduct - 1],detailPhone.id)} href="#" className="button extra-small button-black" tabIndex={-1}>
                    <span className="text-uppercase">MUA NGAY</span>
                </a>
            </div>
        </div>

    )

}
export default DetailProduct;