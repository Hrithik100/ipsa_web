import { AccessTimeOutlined, ChatOutlined, Circle } from "@mui/icons-material";
import React, { useState } from "react";
import "./businessappointment.css";

const BusinessAppointment = () => {
  const businessappointmentupcomingdata = [
    {
      akey: "Anandita",
      name: "Keratin Treatment",
      user: "Anandita",
      date: "Thursday July 31",
      time: "9:30 AM",
    },
    {
      akey: "Ishan",
      name: "Haircut",
      user: "Ishan",
      date: "Thursday July 31",
      time: "10:30 AM",
    },
    {
      akey: "Suraj",
      name: "Haircut",
      user: "Suraj",
      date: "Thursday July 31",
      time: "12:30 AM",
    },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleOnChange= () =>{
    console.log("accepted/rejected")
  }

  return (
    <div className="businessappointmenttabsection">
      <div className="businessappointmenttabs">
        <button
          className={
            toggleState === 1 ? "activetabs" : "businessappointmenttab"
          }
          onClick={() => toggleTab(1)}
        >
          Upcoming
        </button>
        <button
          className={
            toggleState === 2 ? "activetabs" : "businessappointmenttab"
          }
          onClick={() => toggleTab(2)}
        >
          History
        </button>
      </div>
      <div className="businessappointmentcontenttabs">
        <div
          className={
            toggleState === 1
              ? "activecontent"
              : "businessappointmentcontentlist"
          }
          onClick={() => toggleTab(1)}
        >
          <div className="businessappointmentcontents">
            {businessappointmentupcomingdata.map((item) => (
              <div
                className="businessappointmentcontent"
                key={item.akey}
                item={item}
              >
                <div className="businessappointmentdatetime">
                  <span>
                    <AccessTimeOutlined />
                    {item.date}
                  </span>
                  <span>
                    <Circle
                      style={{ fontSize: 6, position: "relative", right: 5 }}
                    />
                    {item.time}
                  </span>
                </div>
                <div className="businessappointmentdetails">
                  <div className="businessappointmentdetailsleft">
                    <div className="businessappointmentdetailscircle"></div>
                    <div className="businessappointmentuserdetails">
                      <span>{item.user}</span>
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                  <div className="businessappointmentdetailsright">
                    <div className="businessappointmentsdetailsstatus">
                      <ChatOutlined />
                    </div>
                    <div className="businessappointmentsactionbuttons">
                      <div className="acceptbutton">
                        <button onClick={handleOnChange}>
                          <span>Accept</span>
                        </button>
                      </div>
                      <div className="actionbtnvertical"></div>
                      <div className="rejectbutton">
                        <button onClick={handleOnChange}>
                          <span>Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            toggleState === 2
              ? "activecontent"
              : "businessappointmentcontentlist"
          }
          onClick={() => toggleTab(2)}
        >
          hello
        </div>
      </div>
    </div>
  );
};

export default BusinessAppointment;
