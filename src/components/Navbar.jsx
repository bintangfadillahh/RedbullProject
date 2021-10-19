import React from "react";

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">Redbull</span>
      </div>
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          <a className="btn btn-ghost btn-sm rounded-btn">About</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
      <div class="navbar-end"></div>
    </div>
  );
};

export default Navbar;
