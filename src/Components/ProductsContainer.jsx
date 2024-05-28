import { Products } from "../Data/Products"
import { Product } from "./Product"
import '../styles/productContainer.css'

export const ProductsContainer = ({itemQuantity, setItemQuantity}) => {
    return (
        <div className="ProductsContainer">
            {Products.map((data, index) =>
                <div key={data.title + index}>
                    <Product 
                        srcImage={data.srcImage} 
                        title={data.title} 
                        code={data.code} 
                        price={data.price}
                        itemQuantity={itemQuantity}
                        setItemQuantity={setItemQuantity} />
                </div>
            )}
        </div>
    )
}