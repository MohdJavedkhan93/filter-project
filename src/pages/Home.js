import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "./About";
import Store from "./Store";

import {
  setProducts, filterProducts, addToCart,
    searchProductsByKeyWord, 
} from "../store/actions/products"
import { dataItems } from "../data";


   
      const Home = () => {
        const dispatch = useDispatch();
        const [cartItems, setCartItems] = useState([]);
        useEffect(() => {
          dispatch(setProducts(dataItems))
        }, []);
      
        const filterItems = (event) => {
          event.preventDefault();
        const filter = event.target.dataset.filter;
          dispatch(filterProducts(dataItems, filter))
        };
        
        const searchItems = () => {
          // const value = document.getElementById("search-item").value
          // let trimmedValue = value.toLowerCase().trim();
          // console.log(jak)
          dispatch(searchProductsByKeyWord(dataItems))
        };
      const addCart = (item) => {
        // setCartItems([...cartItems, item])
        // cartItems.push(item)
        // setCartItems([...cartItems])
        dispatch(addToCart(item))
      }
      // console.log("cartItems", cartItems)
      const removeCartItems = (id) => {
        const items = cartItems.filter((item) => item.id !== id);
        setCartItems(items)
      }
      const clearCart = () => {
        // alert("hii")
        return setCartItems([])

      }
    return(
        <>
        <Header cartItems={cartItems} onRemoveCartItems={removeCartItems} clearCart={clearCart} />                
        <Banner />
        <About />
        <Store onFilterItems={filterItems} addToCart={addCart}
        searchItems={searchItems} />
        </>

    )
}
export default Home