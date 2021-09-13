import React from 'react'
import "./Nav.css"
import Logo from '../../assets/images/medium-logo.png';
import Button from "../Button/Button"

const Nav = () => {
    return(
        <nav className="nav1">
            <div className="nav1__container">
                    <img className="nav1__logo" src={Logo} alt="" />
                    <h2 className="programming">Programming</h2>
                <div className="nav1__items">
                    <li className="nav1__items-li1">Become a Member</li>
                    <li className="nav1__items-li2">Sign In </li>
                    <Button buttonClass="button" buttonText={"Get Started"}/>
                </div>
            </div>
        </nav>
    );
};

export default Nav;