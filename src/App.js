import "./globals.css";
import React, { useState } from "react";
import AddForm from "./AddForm";
import DisplayData from "./DisplayData";

const App = () => {
  const [productName, setProductName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("TV/Monitors");
  const [weight, setWeight] = useState();
  const [color, setColor] = useState("Black");
  const [isAvailable, setIsAvailable] = useState("Yes");
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  return (
    <div className="">
      <AddForm
        productName={productName}
        setProductName={setProductName}
        brand={brand}
        setBrand={setBrand}
        price={price}
        setPrice={setPrice}
        category={category}
        setCategory={setCategory}
        weight={weight}
        setWeight={setWeight}
        color={color}
        setColor={setColor}
        isAvailable={isAvailable}
        setIsAvailable={setIsAvailable}
        id={id}
        setId={setId}
        data={data}
        setData={setData}
      />
      <DisplayData
        productName={productName}
        setProductName={setProductName}
        brand={brand}
        setBrand={setBrand}
        price={price}
        setPrice={setPrice}
        category={category}
        setCategory={setCategory}
        weight={weight}
        setWeight={setWeight}
        color={color}
        setColor={setColor}
        isAvailable={isAvailable}
        setIsAvailable={setIsAvailable}
        id={id}
        setId={setId}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default App;
