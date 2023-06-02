import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, cleanCart} = useContext(CartContext);

    const totalQuantity = cart.reduce((total, product) => (total + product.quantity), 0);

    const total = cart.reduce((total, product) => total + (product.item.precio * product.quantity), 0);

    if(totalQuantity === 0){
        return(
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'> HOME </Link>
            </>
        ) 
    }

  return (
    <div>
        {cart.map(product => <CartItem key={product.id} {...product}/>)}
        <h3>Total: ${total}</h3>
        <button className="buttonCheckout" onClick={() => cleanCart()}>Vaciar Carrito</button>
        <button className="buttonCheckout">
            <Link className="buttonCheckout" to='/checkout'>Finalizar Compra</Link>
            </button>
    </div>
  )
}

export default Cart