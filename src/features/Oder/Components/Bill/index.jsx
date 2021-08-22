import React from 'react';
import PropTypes from 'prop-types';

Bill.propTypes = {
    cart: PropTypes.array,
    sale: PropTypes.object,
};

Bill.defaultProps = {
    cart: [],
    sale: {},
}

function Bill(props) {

    const { cart, sale } = props;
    
    

    const showProducs = (cart) => {
        const result = cart.map((item, index) => {
            if (item.sale) {
                let price = (item.price - item.price * item.sale * 0.01) * item.quantity
                return <tr key={index}>
                    <td className="td-title-1">{item.name} - {item.color}  x {item.quantity}</td>
                    <td className="td-title-2">${price.toFixed(2)}</td>
                </tr>
            }
            else {
                return <tr key={index}>
                    <td className="td-title-1">{item.name} x {item.quantity}</td>
                    <td className="td-title-2">${item.price.toFixed(2)}</td>
                </tr>
            }
        })
        return result;
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

    //Show price sale
    const showPriceSale = (sale) => {
        if(sale.value==0){
            return  <td key={7} className="td-title-2">- $00.00</td>
        }
        else {
            if(sale.value>1){
                return  <td key={8} className="td-title-2">- $15.00</td>
            }
            else{
                let result =totalPrice(cart);
                let total =result*sale.value
                return <td key={9} className="td-title-2">- ${total.toFixed(2)}</td>
            }
            
        }
    }

    const reasonForTheDiscount=(sale) =>{
        let result=null;
        if(sale.name){
            result=sale.name;
        }
        return result;
    }

    //TotalBill
    const totalOrder=(sale,cart)=>{
        let totalProduct=totalPrice(cart);
        let discount=0;
        if(sale.value>1){
            discount=sale.value
        }
        else{
            discount =totalProduct*sale.value
        }
        return (totalProduct-discount).toFixed(2)
        //let discountCode = showDiscountCode(priceSale,cart);
        
     }

    return (
        <div className="col-md-6">
            <div className="payment-details p-30">
                <h6 className="widget-title border-left mb-20">Đơn Hàng của bạn</h6>
                <table>
                    <tbody>
                        {showProducs(cart)}
                        
                        <tr>
                            <td className="td-title-1">Phí Ship</td>
                            <td className="td-title-2">$15.00</td>
                        </tr>
                        <tr>
                            <td className="td-title-1">Sale({reasonForTheDiscount(sale)})</td>
                            {showPriceSale(sale)}
                        </tr>
                        <tr>
                            <td className="order-total">Order Total</td>
                            <td className="order-total-price">${totalOrder(sale,cart)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Bill;