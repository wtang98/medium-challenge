import React from 'react'
import "./Nav.scss"
import Logo from '../../assets/images/medium-logo.png';

const Nav = () => {
    return(
        <nav className="nav1">
            <div className="nav1__container">
                <img className="nav1__logo" src={Logo} alt="" />
                <div className="nav1__items">
                    <li className="nav1__items-li">Our Story</li>
                    <li className="nav1__items-li">Membership</li>
                    <li className="nav1__items-li">Write</li>
                    <li className="nav1__items-li">Sign In </li>
                    <button className="nav1__items-btn">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;