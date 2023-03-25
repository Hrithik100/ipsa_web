import React from "react";
import Header from "../../../components/header/Header";
import "./businessphotos.css";
import BusinessMenu from "./../../../components/menus/businessmenu/BusinessMenu";
import BusinessPhoto from "./../../../components/businessphotos/BusinessPhoto";
import Businessheader from "../../../components/header/Businessheader";

const BusinessPhotos = () => {
  return (
    <>
      <Businessheader />
      <div className="businessphotossection">
        <div className="businessphotosheader">
          <h2>Photos & Videos</h2>
        </div>
        <div className="businessphotoscontainer">
          <div className="businessphotoscontainerleft">
            <BusinessMenu />
            <div className="businessphotosverticleline"></div>
          </div>
          <div className="busisnessphotoscontainerright">
            <BusinessPhoto />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessPhotos;
