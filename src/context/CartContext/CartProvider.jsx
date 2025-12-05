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
            
            const updatedCart = cart.map((prod) => {
                //se hace una copia del array para no mutar el objeto original
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }
            });
            
            setCart(updatedCart);
            alert ("El producto se agregó el carrito")
            //return;
        } else {        
        //primera vez de ser agregado
        setCart([...cart, item]);
        alert (`${item.nombre} agregado al carrito`)
        }
    };
    
    /*----------------------------------------------------------------------------------*/
    /*                        Eliminar productos con filter                             */
    /*----------------------------------------------------------------------------------*/
    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id); //logica inversa, todos los productos menos el que quiero eliminar
        setCart (filtered);
        alert("Producto eliminado del carrito");
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        // Return number of items; when empty, return 0 (previously returned undefined)
        //return cart.length || 0;
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    //calcular Total    
    const  total = () => {  
        const total = cart.reduce((acc, p) => acc + p.precio * p.quantity, 0);
        return Math.round(total*100)/100; //redondear a 2 decimales
    };

    console.log("CartProvider - cart:", cart);

    const values = useMemo(() => ({
        cart,
        addItem,
        clearCart,
        getTotalItems,
        deleteItem,
        total
    }), [cart, addItem, clearCart, getTotalItems, deleteItem, total]);
    
    return (                
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};