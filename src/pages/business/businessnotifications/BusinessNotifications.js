import React from "react";
import Header from "../../../components/header/Header";
import BusinessMenu from "../../../components/menus/businessmenu/BusinessMenu";
import "./businessnotifications.css";
import BusinessNotification from "./../../../components/businessnotifications/BusinessNotification";
import Businessheader from "../../../components/header/Businessheader";

const BusinessNotifications = () => {
  return (
    <>
      <Businessheader />
      <div className="businessnotificationssection">
        <div className="businessnotificationssectionheader">
          <h2>Notifications</h2>
        </div>
        <div className="businessnotificationscustomercontainer">
          <div className="businessnotificationscustomercontainerleft">
            <BusinessMenu />
            <div className="businessnotificationsverticleline"></div>
          </div>
          <div className="businessnotificationscustomercontainerright">
            <BusinessNotification />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessNotifications;
