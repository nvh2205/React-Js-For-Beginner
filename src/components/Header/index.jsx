import React from 'react';
import PropTypes from 'prop-types';
import { NavLink,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartHeader from '../CartHeader'
import SearchHeader from '../SearchHeader'
Header.propTypes = {

};

function Header(props) {

    const phones=useSelector(state=>state.phones)
    
    return (
        <header className="header-area header-wrapper">
            {/* header-top-bar */}

            {/* header-middle-area */}
            <div id="sticky-header" className="header-middle-area plr-185">
                <div className="container-fluid">
                    <div className="full-width-mega-dropdown">
                        <div className="row">
                            {/* logo */}
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <div className="logo">

                                    <NavLink exact to="/">
                                        <img src="/assets/img/logo/logo.jpg" alt="main logo" />
                                    </NavLink>

                                </div>
                            </div>
                            {/* primary-menu */}
                            <div className="col-md-8 hidden-sm hidden-xs">
                                <nav id="primary-menu">
                                    <ul className="main-menu text-center">
                                        <li>
                                            <NavLink exact to="/">
                                                Home
                                            </NavLink>

                                        </li>

                                        <li className="mega-parent"><Link to='/phones/products'>Products</Link>
                                            <div className="mega-menu-area clearfix">
                                                <div className="mega-menu-link f-left">
                                                    <ul className="single-mega-item">
                                                        <li className="menu-title">IPhone</li>
                                                        {phones.map((item,index)=>(
                                                            <li key={index}><NavLink  to={`/phones/products/${item.id}`}>{item.title}</NavLink></li>
                                                        ))}

                                                    </ul>

                                                   
                                                    <ul className="single-mega-item">
                                                        <li className="menu-title">Mac Book</li>
                                                
                                                    </ul>

                                                    <ul className="single-mega-item">
                                                        <li className="menu-title">Ipad</li>
                                                
                                                    </ul>

                                                    

                                                </div>
                                                <div className="mega-menu-photo f-left">
                                                    
                                                        <img src={"/assets/img/Iphone/12-Series/12-pro-max-Blue.jpg"} alt="mega menu image" />
                                                    
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to='/about'>About us</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact'>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* header-search & total-cart */}
                            <div className="col-md-2 col-sm-6 col-xs-12">
                                <div className="search-top-cart  f-right">
                                    {/* header-search */}
                                    <SearchHeader/>
                                    {/* total-cart */}
                                    <CartHeader/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;