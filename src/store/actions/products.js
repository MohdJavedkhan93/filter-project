import {
  SET_PRODUCTS,
  FILTER_PRODUCTS,
  SEARCH_PRODUCTS_BY_KEYWORD,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  CHECKOUT,
} from "../constants";
import Swal from "sweetalert2";

const setProducts = (data) => (dispatch) => {
  dispatch({
    type: SET_PRODUCTS,
    payload: data,
  });
};
const filterProducts = (dataItems, filter) => (dispatch) => {
  const filterItems =
    filter === "all"
      ? dataItems
      : dataItems.filter((item) => item.type === filter);
  dispatch({
    type: FILTER_PRODUCTS,
    payload: filterItems,
  });
};
const searchProductsByKeyWord = (dataItems) => (dispatch) => {
  const value = document.getElementById("search-item").value;
  const trimmedValue = value.toLowerCase().trim();
  if (trimmedValue === "") {
    // console.log(value)
    Swal.fire({
      title: "Error!",
      text: "please write something to search",
      icon: "error",
      confirmButtonText: "ok",
    });
    // alert("please write something to search")
  }
  const searchProducts = dataItems.filter((item) =>
    item.type.includes(trimmedValue)
  );
  if (searchProducts.length === 0) {
    Swal.fire({
      title: "Error!",
      text: "please search something which wrote in our store buttons",
      icon: "error",
      confirmButtonText: "ok",
    });
    // alert('please search something which wrote in our store buttons',)
  }
  dispatch({
    type: SEARCH_PRODUCTS_BY_KEYWORD,
    payload: searchProducts,
  });
};
const addToCart = (item) => (dispatch) => {
  // console.log("cartItems", cartItems)
  // console.log("item", item)

  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
const removeCartItem = (carts, id) => (dispatch) => {
  const items = carts.filter((item) => item.id !== id);
  // console.log("carts", carts);
  // console.log("items", items);
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: items,
  });
};
const clearItem = (data) => (dispatch => {
    dispatch({
        type: CLEAR_CART,
        payload: data
    })
})
const checkout = (cartItems) => (dispatch) => {
  console.log("cartItems", cartItems)
  dispatch({
    type: CHECKOUT,
    payload: cartItems
  })
}
export {
  setProducts,
  filterProducts,
  searchProductsByKeyWord,
  addToCart,
  removeCartItem,
  clearItem,
  checkout
};
