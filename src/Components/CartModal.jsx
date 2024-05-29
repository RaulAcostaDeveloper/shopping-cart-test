import { useEffect, useState } from "react"
import { getCarrito } from "../Data/Cart";
import { Products } from "../Data/Products";
import '../styles/cartModal.css';
import { postData } from "../Data/POST";

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
        postData()
        handleClose(getCarrito());
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
/*
 * This file is part of Cart front end raul acosta dev.
 *
 * Cart front end raul acosta dev is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * Cart front end raul acosta dev is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Cart front end raul acosta dev. If not, see <https://www.gnu.org/licenses/>.
 *
 * Copyright (C) 2024 Angel Raúl Acosta Rojas
 */