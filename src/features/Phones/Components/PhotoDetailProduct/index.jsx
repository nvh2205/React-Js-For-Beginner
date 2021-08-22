import React from 'react';
import PropTypes from 'prop-types';
import { NavLink,Link } from 'react-router-dom'
import useScript from '../../../../utils/useScript.js'
PhotoDetailProduct.propTypes = {
    detailPhone: PropTypes.object,
};

PhotoDetailProduct.defaultProps = {
    detailPhone: {}
}

function PhotoDetailProduct(props) {

    const { detailPhone } = props;


    const displayImage = (product) => {

        const arrProduct = product.map((item, index, arr) => {
            return item[`photo`]
        })

        const uniqueSet = new Set(arrProduct);
        const backToArray = [...uniqueSet];


        const result = backToArray.map((item, index) => (
            
            <div className="p-c" key={index} >
                <a to="#" data-image={item} data-zoom-image={item}>
                    <img className="zoom_03" src={item} alt="" />
                </a>
            </div>
            

        ))
        return result;

        // console.log(backToArray)

        // return <div>av</div>
    }
    //useScript('/assets/js/main.js');

    return (
        
        <div className="imgs-zoom-area">
            <img id="zoom_03" src={detailPhone.listProducts[detailPhone.selectedProduct - 1].photo} data-zoom-image={detailPhone.listProducts[detailPhone.selectedProduct - 1].photo} alt="" />
            <div className="row">
                <div className="col-xs-12">
                    <div id="gallery_01" className="carousel-btn slick-arrow-3 mt-30">
                       
                        {/* <div className="p-c">
                            <Link to="#" data-image="/assets/img/Iphone/12-Series/Iphone12promax.jpg" data-zoom-image="/assets/img/Iphone/12-Series/Iphone12promax.jpg">
                                <img className="zoom_03" src="/assets/img/Iphone/12-Series/Iphone12promax.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="p-c">
                            <Link to="#" data-image="/assets/img/Iphone/12-Series/SamSung.jpg" data-zoom-image="/assets/img/Iphone/12-Series/SamSung.jpg">
                                <img className="zoom_03" src="/assets/img/Iphone/12-Series/SamSung.jpg" alt="" />
                            </Link>
                        </div> */}
                        {/* {displayImage(detailPhone.listProducts)} */}
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default PhotoDetailProduct;