import React, { Fragment } from "react";
import Card from "../components/Card";
import bintang from "../asset/bintang.jpg";
import dian from "../asset/dian.jpg";
import aldi from "../asset/aldi.jpg";
import asep from "../asset/asep.jpg";

export default function Profil() {
  return (
    <Fragment>
      <Card
        name="Muhammad Bintang Fadhillah Hakim"
        nim="205410034"
        text="Bintang adalah anak yang rajin yey"
        insta="https://www.instagram.com/starstar_bb/"
        foto={bintang}
      />
      <Card
        name="Dian Setiawan"
        nim="205410048"
        text="Bintang adalah anak yang juga rajin seperti bintang mungkin"
        insta="https://www.instagram.com/yandian.s/"
        foto={dian}
      />
      <Card
        name="M. Aldi Fahrian"
        nim="205410049"
        text="aldi terkadang rajin seringnya sangat rajin"
        insta="https://www.instagram.com/aldifahrian2/"
        foto={aldi}
      />
      <Card
        name="Asep Suherman"
        nim="205410039"
        text="asep adalah orang paling rajin diantara kami"
        insta="https://www.instagram.com/asepshrm_/"
        foto={asep}
      />
    </Fragment>
  );
}
