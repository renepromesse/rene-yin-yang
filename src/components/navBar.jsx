import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <ul className="flex gap-2 float-right absolute right-60 font-normal text-base pt-4">
            <li> 
                <Link to="/"> Home </Link>
            </li>
            <li> 
                <Link to="/profile"> Profile </Link>
            </li>
            <li> 
                <Link to="/articles"> Article </Link>
            </li>
            <li> 
                <Link to="/research"> Research </Link>
            </li>
            <li> 
                <Link to="/featured"> Featured </Link>
            </li>
        </ul>
        <h1>.</h1>
        </>
    );
};

export default NavBar;