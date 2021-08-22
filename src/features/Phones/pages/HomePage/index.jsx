import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch,useHistory } from 'react-router-dom';
import useScript from '../../../../utils/useScript.js'
import Slider from '../../Components/Slider'
import ProductsSale from '../../Components/ProductsSale'
import FeaturedProducts from '../../Components/FeaturedProducts'
import { useDispatch } from 'react-redux';
import{addProduct} from '../../../Cart/CartSlice'
HomePage.propTypes = {
    
};

function HomePage(props) {
   useScript('/assets/js/main.js')
    const dispatch=useDispatch()
    const history=useHistory()
    //Add product to Cart redux
    const addToCart=(product,idParent)=>{
        const buyProduct=Object.assign({idParent:idParent,quantity:1},product);
        const action = addProduct(buyProduct)
        dispatch(action);

        history.push('/cart')
    }

    //................................................................

    return (
        <div>
           <Slider/>

           <ProductsSale addToCart={addToCart}/>

           <FeaturedProducts addToCart={addToCart}/>
        </div>
    );
}

export default HomePage;