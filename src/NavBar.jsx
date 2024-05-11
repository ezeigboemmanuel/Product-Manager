import React from "react";
import Logo from "./images/logo.png";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useGetUserInfo } from "./hooks/useGetUserInfo";
import toast from "react-hot-toast";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userId: results.user.uid,
      userEmail: results.user.email,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/addproduct");
    toast.success("Signed in successfully");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
      toast.success("Signed out successfully");
    } catch (error) {
      console.log(error, "An error occured while signing out");
    }
  };
  return (
    <header className="w-full">
      <nav className="bg-white border border-b-gray-600 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="/" className="flex items-center -ml-5">
            <img src={Logo} className="h-20" alt="ProdEz Logo" />
          </a>
          <div className="flex space-x-3">
            <a href="/addproduct" className="font-medium cursor-pointer hover:text-blue-500 active:text-blue-500">Add Product</a>
            <a href="/products" className="font-medium cursor-pointer hover:text-blue-500 active:text-blue-500 mr-3">Products</a>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              onClick={isAuth ? signUserOut : signInWithGoogle}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign {isAuth ? "Out" : "In"}
            </button>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
