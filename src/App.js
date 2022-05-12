import { NavBar } from "./components/Navbar/Navbar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css' // ver
import { MyContext } from "./Context/MyContext"

function App() {
  
  const usuario = 'Fer'
  const clave = 'queti'

    
  return (
    <MyContext.Provider value={ {usuario, clave} }>

      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* armar "paginas" piolas */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />

          <Route path="*" element={<p>ERROR</p>} />

        </Routes>
      {/* Footer */ }
      </BrowserRouter >

    </MyContext.Provider>
  );
}

export default App;

