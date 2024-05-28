import '../styles/header.css';
export const Header = ({setShowCartResume, itemQuantity}) => {
    return (
        <div className="header">
            <h1>Shopping Cart</h1>
            <div className="ShowCartButton">
                <button onClick={()=>setShowCartResume(true)}>
                    <img src="./icons/cart.png" alt="Cart icon" />
                    <span>{itemQuantity}</span>
                </button>
            </div>
        </div>
    )
}