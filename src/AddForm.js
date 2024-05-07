import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase";

const AddForm = () => {
  const [productName, setProductName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [catOptions, setCatOptions] = useState([
    "TV/Monitors",
    "PC",
    "Gaming/Console",
    "Phones",
    "Other",
  ]);
  const [category, setCategory] = useState("TV/Monitors");
  const [weight, setWeight] = useState();
  const [colorOptions, setColorOptions] = useState([
    "Black",
    "White",
    "Silver",
    "Blue",
    "Other",
  ]);
  const [color, setColor] = useState("Black");
  const [availableOptions, setAvailableOptions] = useState(["Yes", "No"]);
  const [isAvailable, setIsAvailable] = useState("Yes");

  // Categories
  const categories = catOptions.map((category) => category);
  const handleCategoryChange = (e) => setCategory(catOptions[e.target.value]);

  // Colors
  const colors = colorOptions.map((color) => color);
  const handleColorChange = (e) => setColor(colorOptions[e.target.value]);

  // Available
  const choices = availableOptions.map((choice) => choice);
  const handleAvailableChange = (e) =>
    setIsAvailable(availableOptions[e.target.value]);

  // ======= Database Part =======

  // create a db reference
  const dbRef = collection(db, "Products");

  // Store data to database
  const addDataFunc = async () => {
    try {
      await addDoc(dbRef, {
        ProductName: productName,
        Brand: brand,
        Price: price,
        Category: category,
        Weight: weight,
        Color: color,
        isAvailable: isAvailable,
      });
      alert("Data added successfully");
      window.location.reload();
    } catch (error) {
      alert(error, "An error occurred");
    }
  };
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Add a new product
          </h2>
          <div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Type product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="brand"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                  placeholder="Product brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                  placeholder="$2999"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  onChange={(e) => handleCategoryChange(e)}
                >
                  {categories.map((category, key) => (
                    <option value={key}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  for="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                  placeholder="12"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  for="color"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Color
                </label>
                <select
                  id="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  onChange={(e) => handleColorChange(e)}
                >
                  {colors.map((color, key) => (
                    <option value={key}>{color}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  for="available"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Available
                </label>
                <select
                  id="available"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  onChange={(e) => handleAvailableChange(e)}
                >
                  {choices.map((choice, key) => (
                    <option value={key}>{choice}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              onClick={addDataFunc}
            >
              Add product
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddForm;
