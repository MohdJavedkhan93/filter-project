import { SET_PRODUCTS, FILTER_PRODUCTS, 
    SEARCH_PRODUCTS_BY_KEYWORD, ADD_TO_CART } from "../constants"

const initialState = {
    products:[],
    carts:[]
}
const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS: {
            return {
                products: action.payload
            }
        }
        case FILTER_PRODUCTS: {
            return {
                products: action.payload
            }
        }
        case SEARCH_PRODUCTS_BY_KEYWORD: {
            return {
                products: action.payload
            }
        }
        case ADD_TO_CART: {
            return {
                carts: state.carts.push(action.payload)
            }
        }
        default: {
            return state;
        }
    }

}


export default productReducer