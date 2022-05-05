import React from "react";
import './App.css'; // ver
import { NavBar } from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
  );
}

export default App;

