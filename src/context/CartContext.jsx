import { createContext } from "react";


export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const data = {}

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;