import React from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import AboutMe from "../components/about";

const HomePage=()=>{
    return(
        <>
        <div className="h-[150vh] w-full bg-[#EFEFEF] p-5 ">
        <NavBar/>
        <Header/>
        {/* <AboutMe/> */}
        </div>
        </>

    )
}

export default HomePage