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