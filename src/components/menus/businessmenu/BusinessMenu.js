import React from "react";
import { NavLink } from "react-router-dom";
import "./businessmenu.css"

const BusinessMenu = () => {
  const businessmenu = [
    {
      path: "/businesshome/account",
      name: "Business Details",
    },
    {
      path: "/businesshome/photos",
      name: " Photos & Videos",
    },
    {
      path: "/businesshome/appointments",
      name: "Appointments",
    },
    {
      path: "/businesshome/notifications",
      name: "Notifications",
    },
    {
      path: "/businesshome/support",
      name: "Support",
    },
    {
      path: "/logout",
      name: "Logout",
    },
  ];
  return (
    <div className="menubusinesscontainer">
      <ul className="menubusiness">
        {businessmenu.map((item, index) => (
          <li className="menubusinessitems">
            <NavLink
              to={item.path}
              key={index}
              className="linkmenu"
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessMenu;
