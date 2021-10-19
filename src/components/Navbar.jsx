import React from "react";

const Navbar = () => {
  return (
    <div class="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content">
      <div class="px-2 mx-2 navbar-start">
        <span class="text-lg font-bold">Redbull</span>
      </div>
      <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
          <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          <a class="btn btn-ghost btn-sm rounded-btn">About</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
      <div class="navbar-end"></div>
    </div>
  );
};

export default Navbar;
