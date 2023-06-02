import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const imgCarrito = require('./buy-home.png')
    const {cart} = useContext(CartContext);
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

    return (
        <Link className='imgCart' to='/cart'>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            {
                totalQuantity
            }
        </Link>
    )
}

export default CartWidget