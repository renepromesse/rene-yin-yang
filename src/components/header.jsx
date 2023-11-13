import React from "react";
import * as faIcons from "react-icons/fa"
import "./header.css";
import homeImage from "../assets/images/rene promesse-fotor-bg-remover-2023100916318 (1) 1.png";
import upIcon from "../assets/images/icons/Group 14.svg"
const Header = () => {
  return (
    <>
      <div className="relative ml-[160px]">
        <div className="absolute mt-28 z-10 ">
          <h1 className="heading uppercase relative">
            Ntirenganya{" "}
            <p className="font-roboto font-bold absolute top-28">Rene</p>{" "}
            <p className="absolute top-[15rem] text-[64px]">Promese</p>
          </h1>
        </div>
        <div className="absolute right-0  bg-greens-500">
          <img src={homeImage} alt="" width={650} />
        </div>
      </div>

      <div className="top-[25rem] ml-[160px] absolute  ">
        <div className="w-64 mt-28 ">
        <p className="font-roboto text-[20px] font-normal ">
          Sometimes you have to run before you can walk.
        </p>
        <hr class="w-44 h-[1px]  my-4 bg-black border-0 rounded" />
        </div>
        <div className="ml-[32rem] mts-20" href="#about">
          ,<img src={upIcon} alt="" width={30} />
            {/* <faIcons.FaChevronCircleDown  size={30} color="white" fill="#D9D9D9" /> */}
        </div>
       
      </div>
    </>
  );
};
export default Header;
