import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); //gives out all the parameter used in the url
  return <div>
    <h1>Product List</h1> 
    <p>Showing product with id: {id}</p></div>;
};

export default Product;
