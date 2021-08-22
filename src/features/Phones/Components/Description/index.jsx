import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

Description.propTypes = {
    detailPhone: PropTypes.object
};

Description.defaultProps = {
    detailPhone: {},
}

function Description(props) {

    const { detailPhone } = props;
    const product = detailPhone.listProducts[detailPhone.selectedProduct - 1]

    const displayInfomation = (infomation) => {
        const result = Object.keys(infomation).map((item, key) => {
            return <tr key={key}>
                <th><h3>{item.toUpperCase()}</h3></th>
                <td><h5>{infomation[item]}</h5></td>
            </tr>
        })
        return result
    }

    return (
        <div className="single-product-tab">
            <ul className="reviews-tab mb-20">
                <li className="active"><a href="#description" data-toggle="tab">Miêu Tả</a></li>
                <li><a href="#information" data-toggle="tab">Thông Tin</a></li>
                <li><a href="#reviews" data-toggle="tab">Phản Hồi Khách Hàng</a></li>
            </ul>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="description">
                    <p>{product.description}</p>
                </div>
                <div role="tabpanel" className="tab-pane" id="information">
                    <Table striped>
                        <thead>
                            <tr>
                                <th><h3>Thông số kỹ thuật</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayInfomation(product.specifications)}
                        </tbody>
                    </Table>
                </div>
                <div role="tabpanel" className="tab-pane" id="reviews">
                    {/* reviews-tab-desc */}
                    <div className="reviews-tab-desc">
                        {/* single comments */}
                        <div className="media mt-30">
                            <div className="media-left">
                                <a href="#"><img className="media-object" src="/assets/img/avatar/avatar1.jpg" alt="#" /></a>
                            </div>
                            <div className="media-body">
                                <div className="clearfix">
                                    <div className="name-commenter pull-left">
                                        <h6 className="media-heading"><a href="#">G
                                            </a></h6>
                                        <p className="mb-10">14 Th11, 2021 at 21:15</p>
                                    </div>
                                    {/* <div className="pull-right">
                                        <ul className="reply-delate">
                                            <li><a href="#">Reply</a></li>
                                            <li>/</li>
                                            <li><a href="#">Delate</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer accumsan egestas .</p>
                            </div>
                        </div>
                        {/* single comments */}
                        <div className="media mt-30">
                            <div className="media-left">
                                <a href="#"><img className="media-object" src="/assets/img/avatar/avatar2.jpg" alt="#" /></a>
                            </div>
                            <div className="media-body">
                                <div className="clearfix">
                                    <div className="name-commenter pull-left">
                                        <h6 className="media-heading"><a href="#">Nguyễn H
                                            </a></h6>
                                        <p className="mb-10">27 Th5, 2021 at 21:15</p>
                                    </div>
                                    {/* <div className="pull-right">
                                        <ul className="reply-delate">
                                            <li><a href="#">Reply</a></li>
                                            <li>/</li>
                                            <li><a href="#">Delate</a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer accumsan egestas .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;