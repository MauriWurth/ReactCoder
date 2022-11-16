import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idcategory" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
