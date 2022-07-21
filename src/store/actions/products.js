import { SET_PRODUCTS, FILTER_PRODUCTS, 
    SEARCH_PRODUCTS_BY_KEYWORD, ADD_TO_CART } from "../constants";
import Swal from 'sweetalert2'


const setProducts = (data) => (dispatch) => {
    dispatch({
        type: SET_PRODUCTS,
        payload: data
    })
}
const filterProducts = (dataItems, filter) => (dispatch) => {
    const filterItems = filter === "all" ? dataItems : dataItems.filter((item) => item.type ===filter);
    dispatch({
        type: FILTER_PRODUCTS,
        payload : filterItems
    })

}
const searchProductsByKeyWord = (dataItems, value) => (dispatch) => {
    if(value === "") {
        Swal.fire({
          title: 'Error!',
          text: 'please write something to search',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        // alert("please write something to search")
      }
      const searchProducts = dataItems.filter((item) => item.type.includes(value))
      if(searchProducts.length === 0) {
        Swal.fire({
          title: 'Error!',
          text: 'please search something which wrote in our store buttons',
          icon: 'error',
          confirmButtonText: 'ok'
        })
        // alert('please search something which wrote in our store buttons',)
      }
      dispatch({
        type: SEARCH_PRODUCTS_BY_KEYWORD,
        payload: searchProducts
    })
   
}
const addToCart =(cartItems, item) => (dispatch) => {
    console.log("cartItems", cartItems)
    console.log("item", item)
    
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}
export {
    setProducts,
    filterProducts,
    searchProductsByKeyWord,
    addToCart
}