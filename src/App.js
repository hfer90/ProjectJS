import { NavBar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // ver

function App() {
  return (
    <>

    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;

