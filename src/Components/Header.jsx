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