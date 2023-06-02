import { useContext, useState } from "react"
import './Checkout.css'
import { CartContext } from "../../context/cartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/config'

const Checkout = () => {
    const { cart, cleanCart } = useContext(CartContext);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState ('');
    const [emailReview, setEmailReview] = useState('');
    const [error, setError] = useState ('');
    
    const [orderID, setOrderId] = useState('');

    const handlerCheckout = (e) => {
        e.preventDefault()

        if (!name || !surname || !phone || !email || !emailReview) {
            setError("Por favor, verifique los campos sin completar")
            return
        }

        if (email !== emailReview){
            setError("La dirección de email ingresada no coincide con la verificación")
            return
        }

        const order ={
            items: cart.map((product) => ({
                id: product.item.id,
                producto: product.item.nombre,
                quantity: product.quantity
            })),
            total: cart.reduce((total, product) => total + product.item.precio * product.quantity, 0),
            name,
            surname,
            phone,
            email
        }

        addDoc(collection(db, "orders"), order)
            .then((docRef) =>{
                setOrderId(docRef.id)
                cleanCart();
            })
            .catch((error) => {
                console.error("Error al generar el pedido", error)
                setError("Se produjo un error al generar la orden, vuelva a intentarlo más")
            })
    }

  return (
    <div className="container">
        <h2 className="header text-center mb-5 p-4">Revisa los productos seleccionados y completá con tus datos para finalizar la compra.</h2>
        <form onSubmit={handlerCheckout}>
            {cart.map((product) =>(
                <div class="mb-5" key={product.item.id}>
                    <p>
                        {product.item.nombre} x {product.quantity} unidad/es
                    </p>
                    <p>Subtotal: $ {product.quantity * product.item.precio} </p>
                    <hr />
                </div>
            ) )}
                <div className='row g-3 justify-content-center'>
                    <div className="col-auto">
                        <label for="exampleInputName" className="col-form-label" htmlFor="">Nombre</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="exampleInputName" />
                    </div>
                </div>
                <div className='row g-3 justify-content-center'>
                    <div className="col-auto">
                        <label for="exampleInputSurname" className="col-form-label" htmlFor="">Apellido</label>
                        <input type="text" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)} id="exampleInputSurname" />
                    </div>
                </div>
                <div className='row g-3 justify-content-center'>
                    <div className="col-auto">
                        <label className='col-form-label' htmlFor="">Telefono</label>
                        <input type="tel" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} id="exampleInputPhone" />
                    </div>
                </div>
                <div className='row g-3 justify-content-center'>
                    <div className="col-auto">
                        <label className='col-form-label' htmlFor="">Email</label>
                        <input type="email" className='form-control' placeholder="correo@ejemplo.com" value={email} onChange={(e) =>
                        setEmail(e.target.value)} id="exampleInputEmail" />
                    </div>
                </div>
                <div className='row g-3 justify-content-center'>
                    <div className="col-auto">
                        <label className='col-form-label' htmlFor="">Confirma tu Email</label>
                        <input type="email" className='form-control' placeholder="correo@ejemplo.com" value={emailReview} onChange={(e) => setEmailReview(e.target.value)} id="exampleInputEmailReview"/>
                    </div>
                </div>
            {error && <p style={{ color: "red" }}> {error} </p>}
            <div className='text-center'>
                <button type='submit' className='btn control-button mb-5 orderBuy'>Generar orden de compra</button>
            </div>
        </form>
        {
            orderID && (
                <div className='mb-5 p-3'><strong>¡Gracias por su compra! Su número de pedido es el {orderID}</strong></div>
            )
        }
    </div>
  )
}

export default Checkout