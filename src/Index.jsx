import React from "react";
import useRouter from "./useRouter";

const Index = () => {
  const { push } = useRouter();

  return (
    <div>
      Index
      <div>
        <button onClick={() => push("/about")}>About</button>
      </div>
    </div>
  );
};

export default Index;
