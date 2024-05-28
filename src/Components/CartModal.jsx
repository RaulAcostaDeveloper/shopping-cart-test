import { useEffect, useState } from "react"
import { getCarrito } from "../Data/Cart";
import { Products } from "../Data/Products";
import '../styles/cartModal.css';

export const CartModal = ({handleClose}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=> {
        console.log('Contenido del carrito');
        console.log(getCarrito());
        // Calcular los precios
        // Recorre el arreglo del carrito
        // Recorre el arreglo de productos
        // Si el code del carrito coincide con el code del producto
        // Multiplica el precio del producto por la cantidad en el carrito
        // Sumalo a la variable suma
        // Actualiza el estado de total con la variable suma
        let suma = 0;
        const carrito = getCarrito();
        carrito.map( elementoCarrito =>
            Products.map( producto => {
                if (elementoCarrito.code === producto.code) {
                    suma += elementoCarrito.quantity * producto.price;
                }
            })
        );
        setTotalPrice(suma.toFixed(2));
    },[]);
    const handleProceed = () => {
        // Aquí podría ir un método POST a la API
        console.log('POST service not available');
        handleClose();
    }
    return (
        <div className="CartModal">
            <div className="container">
                <div className="buttons">
                    <button onClick={handleClose}>Close</button>
                    <span>Total: $ {totalPrice}</span>
                </div>
                <button className="proceed" onClick={handleProceed}>Proceed to buy</button>
            </div>
        </div>
    )
}