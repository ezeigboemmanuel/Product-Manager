import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const DisplayData = () => {
  const [data, setData] = useState([]);

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
  useEffect(() => {
    fetch();
  }, []);

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
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 cursor-pointer">
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
