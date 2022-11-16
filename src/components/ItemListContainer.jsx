import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {allProducts} from "./data.js"
// import './ItemListContainer.css'


const ItemListContainer = () => {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(allProducts);
      }, 2000);
    });
    productosPromise.then((res) => {
        if (idcategory) {
            setProductos(res.filter((item) => item.category === idcategory))
            // console.log(Productos)
        } else {
            setProductos(res);
        }
    });
  }, [idcategory]);

  return (
    <div className="itemsContainer">
        <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
