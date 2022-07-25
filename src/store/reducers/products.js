import { SET_PRODUCTS, FILTER_PRODUCTS, 
    SEARCH_PRODUCTS_BY_KEYWORD, ADD_TO_CART, REMOVE_CART_ITEM, CLEAR_CART } from "../constants"

const initialState = {
    products:[],
    carts:[]
}
const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case FILTER_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case SEARCH_PRODUCTS_BY_KEYWORD: {
            return {
                ...state,
                products: action.payload
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                // carts: state.carts.push(action.payload)
                carts: [...state.carts, action.payload]
            }
        }
        case REMOVE_CART_ITEM: {
            return {
                ...state,
                carts: action.payload
            }
        }
        case CLEAR_CART: {
            return {
                ...state,
                carts:action.payload
            }
        }
        default: {
            return state;
        }
    }

}


export default productReducer