import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";

const Divider = () => {
  return (
    <div className="flex flex-row w-full text-light">
      <div className="grid flex-grow card place-items-center mx-24">
        <MdOutlineContactSupport className="text-8xl" />
        <h1 className="mb-5 text-3xl font-bold">About Us</h1>
        <p className="text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          necessitatibus nam ducimus iusto reprehenderit unde autem perspiciatis
          temporibus quo, maxime quaerat magnam sint quia odit recusandae
          repudiandae debitis cumque non.
        </p>
        <Link to="/profil" className="btn btn-outline btn-primary">
          PROFILE
        </Link>
      </div>
      <div className="grid flex-grow card place-items-center mx-24">
        <CgProfile className="text-8xl" />
        <h1 className="mb-5 text-3xl font-bold">Contact Us</h1>
        <p className="text-center mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          distinctio itaque delectus hic eius fugiat harum officia autem atque
          praesentium, sequi mollitia, amet nam? Nemo facere velit maiores
          similique illo.
        </p>
        <Link to="/about" className="btn btn-outline btn-primary">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Divider;
