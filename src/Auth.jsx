import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "./hooks/useGetUserInfo";

const Auth = () => {
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
  };

  if (isAuth) {
    return <Navigate to="/addproduct" />;
  }
  return (
    <div>
      <p className="text-green-400">Sign In with Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default Auth;
