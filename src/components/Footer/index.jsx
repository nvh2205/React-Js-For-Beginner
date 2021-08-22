import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
Footer.propTypes = {

};

function Footer(props) {
    const phones = useSelector(state => state.phones)

    return (
        <footer id="footer" className="footer-area">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="plr-185">
                        <div className="footer-top-inner gray-bg">
                            <div className="row">
                                <div className="col-lg-4 col-md-5 col-sm-4">
                                    <div className="single-footer footer-about">
                                        <div className="footer-logo">
                                            <NavLink exact to="/">
                                                <img src="/assets/img/logo/logo.jpg" alt="main logo" />
                                            </NavLink>
                                        </div>
                                        <div className="footer-brief">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the subas industry's standard dummy text ever since the 1500s,</p>
                                            <p>When an unknown printer took a galley of type and If you are going to use a passage of Lorem Ipsum scrambled it to make.</p>
                                        </div>
                                        <ul className="footer-social">
                                            <li>
                                                <a className="facebook" href="https://www.facebook.com/profile.php?id=100010855262371" title="Facebook"><i className="zmdi zmdi-facebook" /></a>
                                            </li>
                                            <li>
                                                <a className="google-plus" href title="Google Plus"><i className="zmdi zmdi-google-plus" /></a>
                                            </li>
                                            <li>
                                                <a className="twitter" href title="Twitter"><i className="zmdi zmdi-twitter" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 hidden-md hidden-sm">
                                    <div className="single-footer">
                                        <h4 className="footer-title border-left">Iphone</h4>
                                        <ul className="footer-menu">
                                            <li>
                                                <NavLink exact to="/">
                                                    <i className="zmdi zmdi-circle" /><span>Home</span>
                                                </NavLink>

                                            </li>
                                            <li>
                                                <NavLink to="/phones/products"><i className="zmdi zmdi-circle" /><span>Products</span></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/about"><i className="zmdi zmdi-circle" /><span>About Us</span></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/contact"><i className="zmdi zmdi-circle" /><span>Contact</span></NavLink>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4">
                                    <div className="single-footer">
                                        <h4 className="footer-title border-left">Iphone</h4>
                                        <ul className="footer-menu">
                                            {phones.map((item, index) => (
                                                <li key={index}><NavLink to={`/phones/products/${item.id}`}><i className="zmdi zmdi-circle" /><span>{item.title}</span></NavLink></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="single-footer">
                                        <h4 className="footer-title border-left">Gửi thư liên hệ(coming soon)</h4>
                                        <div className="footer-message">

                                            <input type="text" name="name" placeholder="Your name here..." />
                                            <input type="text" name="email" placeholder="Your email here..." />
                                            <textarea className="height-80" name="message" placeholder="Your messege here..." defaultValue={""} />
                                            <button className="submit-btn-1 mt-20 btn-hover-1" type="submit">submit message</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom black-bg">
                <div className="container-fluid">
                    <div className="plr-185">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="copyright-text">
                                        <p>© <a href="#" target="_blank">ReactJs</a> Create 22/08/2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;