import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import CustomerMenu from "../../components/menus/customermenu/CustomerMenu";
import CustomerAppointment from "../../components/tabs/customerappointmentabs/CustomerAppointment";
import "./appointments.css";

const Appointments = () => {
  return (
    <>
      <Header />
      <div className="appointmentssection">
        <div className="appointmentssectionheader">
          <h2>Appointments</h2>
        </div>
        <div className="appointmentscustomercontainer">
          <div className="appointmentscustomercontainerleft">
            <CustomerMenu />
            <div className="appointmentsverticleline"></div>
          </div>
          <div className="appointmentscustomercontaierright">
            <div className="appointmentsmenutabs">
              <CustomerAppointment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
