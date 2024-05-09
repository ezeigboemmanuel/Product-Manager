import "./globals.css";
import React, { useState } from "react";
import AddForm from "./AddForm";
import DisplayData from "./DisplayData";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Auth";

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
      <Toaster position="top-right" />

      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route
            path="/addproduct"
            exact
            element={
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
            }
          />
          <Route
            path="/products"
            exact
            element={
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
            }
          />
        </Routes>
      </Router>

      <p className="mt-4 mr-4 text-right">
        Made by{" "}
        <a
          href="https://twitter.com/zgbocode"
          className="text-blue-500 underline"
        >
          Ezeigbo Emmanuel
        </a>
      </p>
    </div>
  );
};

export default App;
