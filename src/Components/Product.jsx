import { useState } from "react"
import { addProductToCart, deleteProductFromCart } from "../Data/Cart";
import '../styles/product.css';
export const Product  = ({srcImage, title, code, price, itemQuantity, setItemQuantity}) => {
    const [quantity, setQuantity] = useState(0);
    const handleRest = () => {
        if (quantity !== 0) {
            setQuantity(quantity - 1);
            deleteProductFromCart(code);
            // Restar a 1 el item quantity
            setItemQuantity(itemQuantity - 1);
        }
    }
    const handleSum = () => {
        setQuantity(quantity + 1);
        addProductToCart(code);
        // Sumar a 1 el item quantity
        setItemQuantity(itemQuantity + 1);
    }
    return (
        <div className="Product">
            <div className="imageContainer">
                <a href={srcImage} target="_blank">
                    <img src={srcImage} alt={'Photo of '+ title +' product'} />
                </a>
            </div>
            <div className="infoContainer">
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <div className="code">
                    <span>Code: #{code}</span>
                </div>
                <div className="pricesContainer">
                    <div className="price">
                        <span>${price}</span>
                    </div>
                    {quantity > 0 &&
                        <div className="price">
                            <span>${(price * quantity).toFixed(2)}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="quantityContainer">
                <div>
                    <button onClick={handleRest}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleSum}>+</button>
                </div>
            </div>
        </div>
    )
}