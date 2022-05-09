import { createContext, useReducer } from "react";
import * as actions from './actions';


export const CartContext = createContext([]);
const initialState = [];

const cartReducer = (state, action) => {
    switch(action.type) {
        case actions.ADDTOCART:
            const existingProduct = state.find((product) => product.id === action.payload.id);
            if(existingProduct) {
                const newState = state.map((product) => {
                    if(product.id === action.payload.id) {
                        product.quantity += action.payload.quantity;
                    }
                    return product;
                })
                return newState;
            }
            return [...state, action.payload]
        case actions.REMOVEPRODUCT:
            return state.filter((el) => el.id !== action.payload)
        default:
            return state
    }
}

const CartProvider = ({children}) => {
    const [cartProducts, dispatch] = useReducer(cartReducer, initialState);

    const data = {
        cartProducts: cartProducts,
        dispatch: dispatch
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;