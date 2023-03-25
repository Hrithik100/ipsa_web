import React from "react";
import "./customernotifications.css";

const CustomerNotifications = () => {
  const customernotificationdata = [
    {
      activity: "Appointment Confirmed with XXXX",
    },
    {
      activity: "Appointment Cancelled with XXXX",
    },
    {
      activity: "Appointment Rescheduled with XXXX",
    },
    {
      activity:
        "Requesting your valuable feedback for recent appointment with XXXX",
    },
    {
      activity: "Appointment Confirmed with XXXX",
    },
  ];
  return (
    <div className="customernotificationscontainer">
      <div className="customernotificationitems">
        {customernotificationdata.map((item, index) => (
          <div className="customernotificationitem" item={item} key={index}>
            <div className="customernotificationcircle"></div>
            <h2>{item.activity}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerNotifications;
