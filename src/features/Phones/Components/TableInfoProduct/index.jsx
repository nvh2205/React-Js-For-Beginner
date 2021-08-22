import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

TableInfoProduct.propTypes = {
    detailPhone: PropTypes.object
};

TableInfoProduct.defaultProps = {
    detailPhone: {}
}

function TableInfoProduct(props) {
    const { detailPhone } = props;
    const product = detailPhone.listProducts[detailPhone.selectedProduct - 1]

    const displayInfomation = (infomation) => {
        const result = Object.keys(infomation).map((item, key) => {
            return <tr key={key}>
                <th><h6>{item.toUpperCase()}</h6></th>
                <td><p>{infomation[item]}</p></td>
            </tr>
        })
        return result
    }

    return (
        <aside class="widget widget-categories box-shadow mb-30">
            <h6 class="widget-title border-left mb-20">Thông số cấu hình</h6>
            <div id="cat-treeview" class="product-cat">
                <Table striped>
                    
                    <tbody>
                        {displayInfomation(product.specifications)}
                    </tbody>
                </Table>
            </div>
        </aside>
    );
}

export default TableInfoProduct;