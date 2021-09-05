import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import {useSelector}from 'react-redux'
MobileHeader.propTypes = {

};

function MobileHeader(props) {
    const phones = useSelector(state => state.phones)   

    return (
        <div className="mobile-menu-area hidden-lg hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="mobile-menu">
                            <nav id="dropdown">
                                <ul>
                                    <li>
                                        <NavLink exact to="/">
                                            Home
                                        </NavLink>


                                    </li>
        
                                    <li><NavLink to="/phones/products">Products</NavLink>
                                        <ul>
                                            {phones.map((item, index) => (
                                                <li key={index}><NavLink to={`/phones/products/${item.id}`}>{item.title}</NavLink></li>
                                            ))}
                                            
                                        </ul>
                                    </li>
                                    
                                    <li>
                                        <NavLink to='/about'>About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MobileHeader;