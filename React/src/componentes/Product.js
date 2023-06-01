import React, {useContext} from "react"
import { CartContext } from "./CartContext"

const Product = ( { id, name, price }) => {
    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {
        addToCart( { id, name, price })
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: R${price}</p>
            <button onClick = {handleAddToCart}>Add to Cart</button>
        </div>
    )
}


export default Product