import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { db } from "./firebase";
import toast from "react-hot-toast";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "./hooks/useGetUserInfo";
import NavBar from "./NavBar";

const DisplayData = ({
  setProductName,
  setBrand,
  setPrice,
  setCategory,
  setWeight,
  setColor,
  setIsAvailable,
  setId,
  data,
  setData,
}) => {
  const navigate = useNavigate();
  const { userEmail, userId, isAuth } = useGetUserInfo(); // user Info
  // Create Database Reference
  const fetch = async () => {
    const snapshot = await getDocs(
      query(
        collection(db, "Users", userEmail, "Products"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      )
    );
    const fetchData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(fetchData);
  };

  // Use effect to call it once
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
    fetch();
  }, []);

  // Edit data
  const editData = async (id) => {
    const matchId = data.find((data) => {
      return data.id === id;
    });
    navigate("/addproduct");
    setProductName(matchId.ProductName);
    setBrand(matchId.Brand);
    setPrice(matchId.Price);
    setCategory(matchId.Category);
    setWeight(matchId.Weight);
    setColor(matchId.Color);
    setIsAvailable(matchId.isAvailable);
    setId(matchId.id);
  };

  // Delete data from database
  const deleteData = async (id) => {
    const delRef = doc(collection(db, "Users", userEmail, "Products"), id);
    try {
      await deleteDoc(delRef).then(() => {
        toast.error("Product deleted successfully");
      });
      setTimeout(() => {
        window.location.reload();
      }, "5000");
    } catch (error) {
      alert(error);
    }
  };

  // For printing

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <style type="text/css" media="print">
        {
          "\
  @page { size: landscape; }\
"
        }
      </style>
      <NavBar />
      <div
        ref={componentRef}
        className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20"
      >
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
              <th scope="col" className="px-6 py-3 forPrint">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr
                  className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={data.id}
                >
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
                  <td className="flex items-center px-6 py-4 forPrint">
                    <span
                      onClick={() => editData(data.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer forPrint"
                    >
                      Edit
                    </span>
                    <span
                      onClick={() => deleteData(data.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 cursor-pointer forPrint"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button
        type="submit"
        className=" items-center -mt-8 mb-5 ml-2 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        onClick={handlePrint}
      >
        Print
      </button>
    </div>
  );
};

export default DisplayData;
