import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mx-auto w-full h-[50px] flex justify-around items-center  bg-gray-800 shadow-xl text-white">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white">
        RMG<span className="text-green-500">VDB</span>
      </h1>
      <br />

      <ul className="flex">
        <li className="text-sm tracking-wide px-1">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm tracking-wide px-1">
          <Link to="/Upcoming">Upcoming</Link>
        </li>
        <li className="text-sm tracking-wide px-1">
          <Link to="/Developers">Developers</Link>
        </li>
        <li className="text-sm tracking-wide px-1">
          <Link to="/Search">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
