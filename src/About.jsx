import React from "react";
import useRouter from "./useRouter";

const About = () => {
  const { push } = useRouter();

  return (
    <div>
      About
      <div>
        <button onClick={() => push("/")}>Main</button>
      </div>
    </div>
  );
};

export default About;
