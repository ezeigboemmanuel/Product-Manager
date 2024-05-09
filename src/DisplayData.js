import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const DisplayData = ({
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
  setData
}) => {
  

  // Create Database Reference
  const dbRef = collection(db, "Products");
  const fetch = async () => {
    const snapshot = await getDocs(dbRef);
    const fetchData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(fetchData);
  };

  // Use effect to call it once
  useEffect(() => {
    fetch();
  }, []);

  // Edit data
  const editData = async (id) => {
    const matchId = data.find((data) => {
      return data.id === id
    })

    setProductName(matchId.ProductName)
    setBrand(matchId.Brand)
    setPrice(matchId.Price)
    setCategory(matchId.Category)
    setWeight(matchId.Weight)
    setColor(matchId.Color)
    setIsAvailable(matchId.isAvailable)
    setId(matchId.id)
  }

  // Delete data from database
  const deleteData = async (id) => {
    const delRef = doc(dbRef, id);
    try {
      await deleteDoc(delRef)
      alert("Deleted successfully")
      window.location.reload()
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Available
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Weight(kg)
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600" key={data.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.ProductName}
                  </th>
                  <td className="px-6 py-4">{data.Brand}</td>
                  <td className="px-6 py-4">{data.Color}</td>
                  <td className="px-6 py-4">{data.Category}</td>
                  <td className="px-6 py-4">{data.isAvailable}</td>
                  <td className="px-6 py-4">${data.Price}</td>
                  <td className="px-6 py-4">{data.Weight}</td>
                  <td className="flex items-center px-6 py-4">
                    <span onClick={() => editData(data.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </span>
                    <span onClick={() => deleteData(data.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 cursor-pointer">
                      Remove
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayData;
