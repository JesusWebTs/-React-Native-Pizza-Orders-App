import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

const useUser = ({ navigation }) => {
  const { userInformation, setUserInformation } = useContext(UserContext);

  useEffect(() => {
    if (userInformation.logged) navigation.navigate("Loged");
    return () => {};
  }, [userInformation]);

  const logIn = ({ password, user }) => {
    if (password === "123456789" && user === "jesus.jstest@gmail.com")
      setUserInformation((prev) => ({ ...prev, logged: true }));
    else {
      navigation.navigate("LogIn");
    }
  };
  const logOut = () => {};

  return { logIn, logOut };
};

export default useUser;
