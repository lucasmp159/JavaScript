import { CartProvider } from "./CartContext";
import Product from "./Product";
import Cart from './Cart.js'

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Lista de produtos: </h1>
        <Product id = {1} name="Banana" price={5}/>
        <Product id = {2} name="Strawberry" price={9}/>
        <Product id = {3} name="Orange" price={8}/>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
