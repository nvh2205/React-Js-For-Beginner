import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
Slider.propTypes = {

};

function Slider(props) {

    //const phones= useSelector(state=>state.phones);
    const [phonesSlider, setPhonesSilder] = useState([
        {
            id: 'iphone-12-pro-max',
            img: 'assets/img/Iphone/Slider/Iphone12pro-slider1.jpg',
            title: 'IPHONE 12 PRO MAX',
            description: 'iPhone 12 hiện nay là cái tên “sốt xình xịch” bởi đây là một trong 4 siêu phẩm vừa được ra mắt của Apple với những đột phá về cả thiết kế lẫn cấu hình.'
        },

        {
            id: 'iphone-12',
            img: 'assets/img/Iphone/Slider/slider2.jpg',
            title: 'IPHONE 12',
            description: 'iPhone 12 VN/A phiên bản bộ nhớ trong 128GB sẽ khiến bạn có thể vô tư với hàng tá ứng dụng, chứa rất nhiều ảnh, video và không cần lo lắng việc không đủ dung lượng sử dụng.'
        },

        {
            id: 'iphone-11',
            img: 'assets/img/Iphone/Slider/slider3.jpg',
            title: 'IPHONE 11',
            description: 'iPhone 12 hiện nay là cái tên “sốt xình xịch” bởi đây là một trong 4 siêu phẩm vừa được ra mắt của Apple với những đột phá về cả thiết kế lẫn cấu hình.'
        }
    ])

    const match = useRouteMatch();

    return (
        <div className="slider-area  plr-185  mb-80">
            <div className="container-fluid">
                <div className="slider-content">
                    <div className="row">
                        <div className="active-slider-1 slick-arrow-1 slick-dots-1">
                            {/* layer-1 Start */}



                            {/* <div className="slider-img">
                                        <img src="assets/img/Iphone/Slider/Iphone12pro-slider1.jpg" alt="" />
                                    </div>
                                    <div className="slider-info gray-bg">
                                        <div className="slider-info-inner">
                                            <h1 className="slider-title-1 text-uppercase text-black-1">WaterProof smartphone</h1>
                                            <div className="slider-brief text-black-2">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                                            </div>
                                            <a href="#" className="button extra-small button-black">
                                                <span className="text-uppercase">Buy now</span>
                                            </a>
                                        </div>
                                    </div> */}
                            {phonesSlider.map((item, index) => (
                                <div key={index} className="col-md-12">
                                    <div className="layer-1" >
                                        <div className="slider-img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="slider-info gray-bg">
                                            <div className="slider-info-inner">
                                                <h1 className="slider-title-1 text-uppercase text-black-1">{item.title}</h1>
                                                <div className="slider-brief text-black-2">
                                                    <p>{item.description}</p>
                                                </div>
                                                <NavLink to={`phones/products/single/${item.id}`} className="button extra-small button-black">
                                                    <span className="text-uppercase">Buy now</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}



                            {/* layer-1 end */}
                            {/* layer-1 Start */}


                            {/* layer-1 end */}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Slider;