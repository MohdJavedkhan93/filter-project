import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = ({ cartItems }) => {
  let price = 0;
  price = cartItems.reduce((initial, item) => {
    return initial + item.price;
  }, 0);
  const navigate = useNavigate();
  const redirectToCartSending = (cart) => {
    navigate("/cart", { state: cart });
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg px-4">
          <Link className="navbar-brand" to="#">
            <img src={Logo} alt="logo-image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNav"
          >
            <span className="toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav mx-auto text-capitalize">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#about">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#store">
                  store
                </a>
              </li>
            </ul>
            <div className="nav-info-items d-none d-lg-flex ">
              <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                <span className="info-icon mx-lg-3">
                  <i className="fas fa-phone"></i>
                </span>
                <p className="mb-0">+91 7007-13-03</p>
              </div>
              {cartItems.length ? (
                <div
                  id="cart-info"
                  className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5"
                  onClick={() => {
                    redirectToCartSending(cartItems);
                  }}
                >
                  <span className="cart-info__icon mr-lg-3">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <p className="mb-0 text-capitalize">
                    <span id="item-count">{cartItems.length} </span>{" "}
                    {cartItems.length && cartItems.length > 1
                      ? "items"
                      : "item"}{" "}
                    - $<span className="item-total">{price}</span>
                  </p>
                </div>
              ) : (
                <div
                  id="cart-info"
                  className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5"
                >
                  <span className="cart-info__icon mr-lg-3">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <p className="mb-0 text-capitalize">
                    <span id="item-count">{cartItems.length} </span>{" "}
                    {cartItems.length && cartItems.length > 1
                      ? "items"
                      : "item"}{" "}
                    - $<span className="item-total">{price}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
