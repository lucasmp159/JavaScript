import React, { createContext, useState} from 'react'

// Criação do Context do carrinho de compras
export const CartContext = createContext()

// Provider do carrinho de compras
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItens] = useState([])
    
    const addToCart = (item) => {
        setCartItens([...cartItems, item])
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
