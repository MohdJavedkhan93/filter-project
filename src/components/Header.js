import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg"

const Header =() =>{
    return(
        <>
        <header>
        <nav className="navbar navbar-expand-lg px-4">
    <Link className="navbar-brand" to="#"><img src={Logo} alt="logo-image" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
        <span className="toggler-icon"><i className="fas fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="myNav">
        <ul className="navbar-nav mx-auto text-capitalize">
        <li className="nav-item active">
            <Link className="nav-link" to="#">home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to="#">about</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="#">store</Link>
        </li>
        </ul>
        <div className="nav-info-items d-none d-lg-flex ">
        <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
            <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
            <p className="mb-0">+ 123 456 789</p>
        </div>
    
        <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
            <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
            <p className="mb-0 text-capitalize"><span id="item-count">2 </span> items - $<span className="item-total">10.49</span></p>
        </div>
        </div>
    </div>
    </nav>
    </header>
        </>
    )
}
export default Header