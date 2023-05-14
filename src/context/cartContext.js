import { useState, createContext } from "react";

export const CartContext = createContext({cart:[]});

export const CartPovider = ({children}) => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const itemAdded = (id) => {
        return cart.some(product => product.id === id);
    }

    const addProduct = (item, cantidad) => {
            if(!itemAdded(item.id)){
                setCart(prev => [...prev, {item, cantidad}]);
            } else {
                console.log("Producto ya agregado");
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter( product => product.id !== id);
        setCart(updatedCart);
    }
    const cleanCart = () => {
        setCart([]);
    }
    
    return (
        <CartContext.Provider value={{cart, addProduct, cleanCart, deleteItem}} >
          {children}  
        </CartContext.Provider>
    )
    

}