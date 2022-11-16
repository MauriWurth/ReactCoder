import React from "react";
import Item from "./Item";
import './ItemList.css'

export default function ItemList({productos}) {
  return (
    <>
      {!productos.length > 0 && "Loading..."}
      {productos.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}
