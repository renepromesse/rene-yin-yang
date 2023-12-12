import React from "react";
import * as faIcons from "react-icons/fa"
import "./header.css";
import homeImage from "../assets/images/rene promesse-fotor-bg-remover-2023100916318 (1) 1.png";
import upIcon from "../assets/images/icons/Group 14.svg"
const Header = () => {
  return (
    <>
      <div className="relative ml-[30px] xl:ml-[160px]  ">
        <div className="absolute mt-14 xl:mt-28 z-10 ">
          <h1 className="heading uppercase relative lg:max-lg:hmax-2xl:bg-green-300 lg:max-lg:max-2xl:tsext-[100px] text-[60px] xl:text-[100px]">
            Ntirenganya{" "}
            <p className="font-roboto font-bold absolute top-20 xl:top-28">Rene</p>{" "}
            <p className="absolute top-[10rem] xl:top-[15rem] text-[50px] xl:text-[64px]">Promese</p>
          </h1>
        </div>
        <div className="absolute xl:right-0 mr-[28rem] mt-10 xl:mt-2 xl:mr-0 lg:max-2xl:right-16">
          <img src={homeImage} alt=""  className="w-[260px]  xl:w-[650px] "/>
        </div>
      </div>

      <div className="top-[14rem] xl:top-[25rem] ml-[20px] xl:ml-[160px] absolute lg:max-2xls:ml-[100px] ">
        <div className="w-64 mt-28 ">
        <p className=" text-[20px] font-normal ">
          Sometimes you have to run before you can walk.
        </p>
        <hr class="w-44 h-[1px]  my-4 bg-black border-0 rounded" />
        </div>
        <div className="ml-[15rem] xl:ml-[32rem] lgs:max-2xl:ml-[28rem] " >
         <a href="#about"><img src={upIcon} alt="" width={30} /></a> 
            {/* <faIcons.FaChevronCircleDown  size={30} color="white" fill="#D9D9D9" /> */}
        </div>
       
      </div>
    </>
  );
};
export default Header;
