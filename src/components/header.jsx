import React from "react";
import * as faIcons from "react-icons/fa"
import "./header.css";
import homeImage from "../assets/images/rene promesse-fotor-bg-remover-2023100916318 (1) 1.png";
import AboutMe from "./about";
const Header = () => {
  return (
    <>
      <div className="relative ml-[160px]">
        <div className="absolute mt-28 z-10 ">
          <h1 className="heading uppercase relative">
            Ntirenganya{" "}
            <p className="font-roboto font-bold absolute top-36">Rene</p>{" "}
            <p className="absolute top-[20rem] text-[64px]">Promese</p>
          </h1>
        </div>
        <div className="absolute right-0  bg-greens-500">
          <img src={homeImage} alt="" width={800} />
        </div>
      </div>

      <div className="top-[31rem] ml-[160px] absolute  ">
        <div className="w-64 mt-28 ">
        <p className="font-roboto text-[20px] font-normal divide-y">
          Sometimes you have to run before you can walk.
        </p>
        <hr class="h-1 mt-1 mr-5 border-2" />
        </div>
        <div className="ml-[40rem] mt-20">
            <faIcons.FaChevronCircleDown  size={30} color="white" fill="#D9D9D9"/>
        </div>
        <AboutMe/>
      </div>
    </>
  );
};
export default Header;
