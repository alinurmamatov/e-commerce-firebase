import { createContext, useReducer } from "react";
import * as actions from './actions';


export const CartContext = createContext([]);
const initialState = [];

const cartReducer = (state, action) => {
    switch(action.type) {
        case actions.ADDTOCART:
            return [...state, action.payload]
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