import React from "react";
import Header from "../../../components/header/Header";
import BusinessMenu from "../../../components/menus/businessmenu/BusinessMenu";
import "./businessappointments.css";
import BusinessAppointment from "./../../../components/tabs/businessappointmenttabs/BusinessAppointment";
import Businessheader from "../../../components/header/Businessheader";

const BusinessAppointments = () => {
  return (
    <>
      <Businessheader />
      <div className="businessappointmentssection">
        <div className="businessappointmentssectionheader">
          <h2>Appointments</h2>
        </div>
        <div className="businessappointmentscustomercontainer">
          <div className="businessappointmentscustomercontainerleft">
            <BusinessMenu />
            <div className="businessappointmentsverticleline"></div>
          </div>
          <div className="businessappointmentscustomercontaierright">
            <div className="businessappointmentsmenutabs">
              <BusinessAppointment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAppointments;
