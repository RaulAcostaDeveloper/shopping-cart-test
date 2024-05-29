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