import React from "react";
import { NavLink } from "react-router-dom";
import "./businessdropdown.css";

const BusinessDropdown = () => {
  return (
    <>
      <ul className="dropdown">
        <li className="dropdownitems">
          <NavLink to="/businesshome/account" className="links">
            Business Details
          </NavLink>
        </li>
        <li className="dropdownitems">
          <NavLink to="/businesshome/photos" className="links">
            Photos & Videos
          </NavLink>
        </li>
        <li className="dropdownitems">
          <NavLink to="/businesshome/appointments" className="links">
            Appointments
          </NavLink>
        </li>
        <li className="dropdownitems">
          <NavLink to="/businesshome/notifications" className="links">
            Notifications
          </NavLink>
        </li>
        <li className="dropdownitems">
          <NavLink to="/businesshome/support" className="links">
            Support
          </NavLink>
        </li>
        <li className="dropdownitems">
          <NavLink to="/logout" className="links">
            Logout
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default BusinessDropdown;
