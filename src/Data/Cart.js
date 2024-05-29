const cart = [];
export const addProductToCart = (codeProduct) => {
    const index = cart.findIndex(objeto => objeto.code === codeProduct);
    // Si no contiene el producto, añadirle el objeto con la cantidad de 1
    if (index === -1) {
        cart.push({
            code: codeProduct,
            quantity: 1
        })
    } else {
        // Si ya existe, sumarle en 1 a la cantidad
        cart[index].quantity = cart[index].quantity + 1;
    }
}
export const deleteProductFromCart = (codeProduct) => {
    const index = cart.findIndex(objeto => objeto.code === codeProduct);
    if (index !== -1) {
        if (cart[index].quantity === 1) {
            cart.splice(index,1);
        } else {
            cart[index].quantity = cart[index].quantity - 1;
        }
    }
}
export const getCarrito = () => {
    return cart;
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