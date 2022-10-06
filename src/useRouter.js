import React, { useContext } from "react";
import RouterContext from "./context/RouterContext";


const useRouter = () => {

    const { setLocation } = useContext(RouterContext);

    const push = (path) => {
        window.history.pushState({ path }, null, path);
        setLocation(path);
    }

    return { push };


};

export default useRouter;