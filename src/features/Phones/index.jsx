import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import SingleProduct from './pages/SingleProduct'
import NotFound from '../../components/NotFound'
import useScript from '../../utils/useScript.js'
import ListProduct from './pages/ListProduct'
Phones.propTypes = {
    
};

function Phones(props) {

    const match= useRouteMatch();    
    //useScript('/assets/js/main.js')

    return (
        <Switch>
            <Route exact path={match.url} component={HomePage}/>
            <Route exact path={`${match.url}/products`} component={ListProduct}/>
            <Route exact path={`${match.url}/products/:id`} component={ListProduct}/>
            <Route path={`${match.url}/products/single/:id`} component={SingleProduct}/>
            
            <Route component={NotFound} />
        </Switch>
    );
}

export default Phones;