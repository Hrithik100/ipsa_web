import React from "react";
import { NavLink } from "react-router-dom";
import "./customermenu.css";

const CustomerMenu = () => {
  const customermenu = [
    {
      path: "/myaccount",
      name: "User Details",
    },
    {
      path: "/appointments",
      name: "Appointments",
    },
    {
      path: "/notifications",
      name: "Notifications",
    },
    {
      path: "/support",
      name: "Support",
    },
    {
      path: "/logout",
      name: "Logout",
    },
  ];
  return (
    <div className="menucustomercontainer">
      <ul className="menucustomer">
        {customermenu.map((item, index) => (
          <li className="menucustomeritems">
            <NavLink to={item.path} key={index} className="linkmenu" activeClassName="active">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerMenu;
