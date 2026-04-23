import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import CrystalAnimation from "./CrystalAnimation";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <CrystalAnimation />
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I am</h2>
            <h1>PRATHAM</h1>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
