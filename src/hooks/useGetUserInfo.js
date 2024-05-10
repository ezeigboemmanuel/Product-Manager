export const useGetUserInfo = () => {
  const { name, profilePhoto, userId, userEmail, isAuth } = JSON.parse(
    localStorage.getItem("auth")
  );

  return { name, profilePhoto, userId, userEmail, isAuth };
};
