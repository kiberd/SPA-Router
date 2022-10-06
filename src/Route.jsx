import React, { useContext } from "react";
import RouterContext from "./context/RouterContext";

const Route = ({ path, component }) => {
  const { location } = useContext(RouterContext);

  return location === path ? component : null;
};

export default Route;
