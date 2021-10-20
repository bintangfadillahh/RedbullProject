
import React, { Fragment } from 'react'

export default function About() {
  return (
    <Fragment>
      
<div className="card bordered w-1/2 mx-auto text-justify">
  <div className="card-body">
    <h2 className="card-title text-center">About Us</h2> 
    <p>Welcome to RedBull, your number one source for all things furniture. We are dedicated to providing you with the best products, with an emphasis on quality raw materials, pocket-friendly prices, and delivery throughout Indonesia.
      Founded in 2019 by Dian Setiawan, RedBull has come a long way from its start in Indonesia. When we first started out, our passion for customer satisfaction.
      We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, don't hesitate to contact us.

<div className="mt-12">
<p className="mb-6">Truly,</p>


<p>RedBull</p>
</div>
</p>
<div className="form-control w-full mx-auto mt-6">
  <label className="label">
    <span className="label-text">Suggestion :</span>
  </label> 
  <textarea className="textarea h-24 textarea-bordered textarea-info" placeholder="Write here...."></textarea>
<button className="btn btn-accent w-1/6 mt-6 ml-auto text-right">Send</button> 
</div>
  </div>
</div>


    </Fragment>
  )
}
