import React from "react";

const Slider =() =>{
    return(
        <div class="container-fluid">
    <div class="row max-height justify-content-center align-items-center">
        <div class="col-10 mx-auto banner text-center">
        <h1 class="text-capitalize">welcome to <strong class="banner-title ">grandma's</strong></h1>
        <a href="#store" class="btn banner-link text-uppercase my-2">explore</a>

        </div>
        <div id="cart" class="cart">
        
        <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="img/z-cake-2.jpeg" class="img-fluid rounded-circle" id="item-img" alt="" />
            <div class="item-text">

            <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
            <p id="cart-item-price" class="mb-0">10.99</p>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
            </a>
        </div>
        
        <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="img/z-sweets-3.jpeg" class="img-fluid rounded-circle" id="item-img" alt="" />
            <div class="cart-item-text">

            <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
            <p id="cart-item-price" class="mb-0">10.99</p>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
            </a>
        </div>
        
        <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
            <h5>total</h5>
            <h5> $ <strong id="cart-total" class="font-weight-bold">10.00</strong> </h5>
        </div>
        
        <div class="cart-buttons-container mt-3 d-flex justify-content-between">
            <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
            <a href="#" class="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
        </div>
        
        </div>
    </div>
    </div>
        )
}
export default Slider