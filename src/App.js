import { NavBar } from "./components/Navbar/Navbar"
import Cart from "./components/Cart/Cart"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css' // ver
import { CartProvider } from "./Context/CartContext"

function App() {

  return (

    <CartProvider>

      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* armar "paginas" piolas */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<p>ERROR</p>} />
        </Routes>

        {/* Footer */}

      </BrowserRouter >

    </CartProvider>

  );
}

export default App;

