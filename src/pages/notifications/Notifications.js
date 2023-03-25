import React from "react";
import CustomerNotifications from "../../components/customernotifications/CustomerNotifications";
import Header from "../../components/header/Header";
import CustomerMenu from "../../components/menus/customermenu/CustomerMenu";
import "./notifications.css";

const Notifications = () => {
  return (
    <>
    <Header/>
      <div className="notificationssection">
        <div className="notificationssectionheader">
          <h2>Notifications</h2>
        </div>
        <div className="notificationscustomercontainer">
          <div className="notificationscustomercontainerleft">
            <CustomerMenu />
            <div className="notificationsverticleline"></div>
          </div>
          <div className="notificationscustomercontainerright">
            <CustomerNotifications/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
