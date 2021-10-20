import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Card(props) {
  return (
    <div class="flex items-center w-3/5 mx-auto px-4 py-10 bg-cover card bg-base-200">
      <div class="card glass lg:card-side text-neutral-content">
        <div class="avatar items-center p-5">
          <div class="rounded-btn h-96 w-64">
            <img src={props.foto} alt="" />
          </div>
        </div>
        <div class="max-w-md card-body">
          <h2 class="card-title">{props.name}</h2>
          <b className="text-right">{props.nim}</b>
          <i className="mt-8">{props.text}</i>
          <div class="card-actions justify-end">
            <a
              href={props.insta}
              class="btn-outline btn btn-accent rounded-full"
            >
              {" "}
              <AiOutlineInstagram className="mr-4 text-xl" /> instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
