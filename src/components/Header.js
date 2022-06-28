import React from "react";

const Header =() =>{
    return(
        <>
        <nav class="navbar navbar-expand-lg px-4">
    <a class="navbar-brand" href="#"><img src="img/logo.svg" alt="" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
        <span class="toggler-icon"><i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="myNav">
        <ul class="navbar-nav mx-auto text-capitalize">
        <li class="nav-item active">
            <a class="nav-link" href="#">home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#">about</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">store</a>
        </li>
        </ul>
        <div class="nav-info-items d-none d-lg-flex ">
        <div class="nav-info align-items-center d-flex justify-content-between mx-lg-5">
            <span class="info-icon mx-lg-3"><i class="fas fa-phone"></i></span>
            <p class="mb-0">+ 123 456 789</p>
        </div>
    
        <div id="cart-info" class="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
            <span class="cart-info__icon mr-lg-3"><i class="fas fa-shopping-cart"></i></span>
            <p class="mb-0 text-capitalize"><span id="item-count">2 </span> items - $<span class="item-total">10.49</span></p>
        </div>
        </div>
    </div>
    </nav>
        </>
    )
}
export default Header