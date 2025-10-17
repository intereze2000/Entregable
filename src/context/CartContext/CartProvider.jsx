import { useState, useMemo } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    }
    
    const addItem = (item) => {
        if (exists(item.id)) {            
            alert ("El producto ya se encuentra en el carrito")
            return;
        }
        
        setCart([...cart, item]);
        alert (`${item.nombre} agregado al carrito`)
    };

    
    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        // Return number of items; when empty, return 0 (previously returned undefined)
        return cart.length || 0;
    };

    const values = useMemo(() => ({
        cart,
        addItem,
        clearCart,
        getTotalItems,
    }), [cart, addItem, clearCart, getTotalItems]);
    
    return (                
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};