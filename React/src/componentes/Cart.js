import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div> 
        <h2>Cart:</h2>
        {cartItems.length === 0 ? (<p> Your Car is empty</p>) : 
            (<u>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}
                    </li>
                    ))}
            </u>
        )}
    </div>
    )
}