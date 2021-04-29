import jwtDecode from "jwt-decode";

const useAuthenticationHooks = () => {
  const getLocalStorageJWT = () => {
    return localStorage.getItem("jwtToken");
    console.log(getLocalStorageJWT);
  };

  const setLocalStorageJWT = () => {
    return localStorage.setItem("jwtToken", jwtToken);
  };

  const removeToken = () => {
    localStorage.removeItem("usersToken");
  };

  const checkToken = () => {
    let token = getLocalStorageJWT();
    if (token) {
      let decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        removeToken();
        return false;
      } else {
        setLocalStorageJWT(token);
        return decodedToken;
      }
    } else {
      return false;
    }
  };
  return [checkToken];
};
export default { useAuthenticationHooks };
