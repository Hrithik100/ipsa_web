import React from 'react'
import "./businessnotification.css"

const BusinessNotification = () => {
  const businessnotificationdata = [
    {
      activity: "Appointment requested for XXXX on XX-XX-XXXX",
    },
    {
      activity: "Appointment canceled for XXXX on XX-XX-XXXX",
    },
    {
      activity: "Appointment rescheduled for XXXX on XX-XX-XXXX",
    },
    {
      activity:
        "Respond to customer feedback for recent appointment on XX-XX-XXXX",
    },
    {
      activity: "Appointment requested for XXXX on XX-XX-XXXX",
    },
  ];
  return (
    <div className="businessnotificationscontainer">
      <div className="businessnotificationitems">
        {businessnotificationdata.map((item, index) => (
          <div className="businessnotificationitem" item={item} key={index}>
            <div className="businessnotificationcircle"></div>
            <h2>{item.activity}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessNotification