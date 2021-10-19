import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../data/navData";

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">Redbull</span>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch">
          {navData.map((data) => {
            return (
              <NavLink to={data.url} exact>
                {data.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div class="navbar-end"></div>
    </div>
  );
};

export default Navbar;
