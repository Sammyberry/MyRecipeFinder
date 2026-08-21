import Explore from "./Explore/Explore";
import Search from "./Search/Search";
import Product from "./Product/Product";
import { useState } from "react";
import PopUp from "./Product/PopUp";

function Recipes() {
  const [sharedData, setSharedData] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  return (
    <>
      <Explore />
      <Search sharedData={sharedData} setSharedData={setSharedData} />
      
      <Product  sharedData={sharedData} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} activeProduct={activeProduct} setActiveProduct={setActiveProduct}/>
      
    </>
  );
}

export default Recipes;
