import React, { useState, useEffect, createContext } from "react";
import RouterContext from "./context/RouterContext";

const Router = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      setLocation(e.state.path);
    });
  }, []);

  return (
    <RouterContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
