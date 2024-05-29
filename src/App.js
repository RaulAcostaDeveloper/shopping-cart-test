import { useState } from "react";
import { ProductsContainer } from "./Components/ProductsContainer";
import { CartModal } from "./Components/CartModal";
import { Header } from "./Components/Header";

function App() {
  const [showCartResume, setShowCartResume] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div className="App">
      <div className="contentPage">
        <Header setShowCartResume = {setShowCartResume} itemQuantity = {itemQuantity}/>
        <ProductsContainer itemQuantity = {itemQuantity} setItemQuantity = {setItemQuantity}/>
        {showCartResume && <CartModal handleClose = {()=>setShowCartResume(false)}/>}
      </div>
    </div>
  );
}

export default App;
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