import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const AddForm = ({
  productName,
  setProductName,
  brand,
  setBrand,
  price,
  setPrice,
  category,
  setCategory,
  weight,
  setWeight,
  color,
  setColor,
  isAvailable,
  setIsAvailable,
  id,
  setId,
  data,
  setData,
}) => {
  const navigate = useNavigate();
  // Categories
  const handleCategoryChange = (e) => setCategory(e.target.value);

  console.log("Category", category);

  // Colors
  const handleColorChange = (e) => setColor(e.target.value);

  // Available
  const handleAvailableChange = (e) => setIsAvailable(e.target.value);

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
        createdAt: serverTimestamp(),
      }).then(() => {
        toast.success("Product added successfully");
      });
      navigate('/products')
    } catch (error) {
      alert(error, "An error occurred");
    }
  };

  // Update Data
  const updateData = async () => {
    try {
      const updateRef = doc(dbRef, id);
      await updateDoc(updateRef, {
        ProductName: productName,
        Brand: brand,
        Price: price,
        Category: category,
        Weight: weight,
        Color: color,
        isAvailable: isAvailable,
        createdAt: serverTimestamp(),
      }).then(() => {
        toast.success("Product updated successfully");
      });
      navigate('/products')
    } catch (error) {
      alert(error, "An error occurred");
    }
  };
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
          {data.id == id ? "Add a new product" : "Update product"}
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
                  value={category}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  onChange={(e) => handleCategoryChange(e)}
                >
                  <option value="TV/Monitors">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="Gaming/Console">Gaming/Console</option>
                  <option value="Phones">Phones</option>
                  <option value="Other">Other</option>
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
                  value={color}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  onChange={(e) => handleColorChange(e)}
                >
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Silver">Silver</option>
                  <option value="Blue">Blue</option>
                  <option value="Other">Other</option>
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
                  value={isAvailable}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  onChange={(e) => handleAvailableChange(e)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              onClick={data.id == id ? addDataFunc : updateData}
            >
              {data.id == id ? "Add " : "Update "}product
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddForm;
