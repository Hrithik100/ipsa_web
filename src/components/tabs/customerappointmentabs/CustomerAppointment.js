import { AccessTimeOutlined, Circle } from "@mui/icons-material";
import React, { useState } from "react";
import "./customerappointment.css";

const CustomerAppointment = () => {
  const customerappointmentupcomingdata = [
    {
      akey:"keratin treatment",
      name: "Keratin Treatment",
      company: "Coco Salon",
      date: "Thursday July 31",
      time: "9:30 AM",
    },
    {
      akey:"haircut",
      name: "Haircut",
      company: "Coco Salon",
      date: "Thursday July 31",
      time: "11:30 AM",
    },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="customerappointmenttabsection">
      <div className="customerappointmenttabs">
        <button className={toggleState === 1 ? "activetabs":"customerappointmenttab"} onClick={() => toggleTab(1)}>Upcoming</button>
        <button className={toggleState === 2 ? "activetabs":"customerappointmenttab"} onClick={() => toggleTab(2)}>History</button>
      </div>
      <div className="customerappointmentcontenttabs">
        <div className={toggleState === 1 ? "activecontent":"customerappointmentcontentlist"} onClick={() => toggleTab(1)}>
          <div className="customerappointmentcontents">
          {customerappointmentupcomingdata.map((item) => (
            <div className="customerappointmentcontent" key={item.akey} item={item}>
              <div className="customerappointmentdetails">
                <h2>{item.name}</h2>
                <span>{item.company}</span>
              </div>
              <div className="customerappointmentdatetime">
                <span><AccessTimeOutlined/>{item.date}</span>
                <span><Circle style={{fontSize:6,position:"relative",right:5}}/>{item.time}</span>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className={toggleState === 2 ? "activecontent":"customerappointmentcontentlist"} onClick={() => toggleTab(2)}>
            hello
        </div>
      </div>
    </div>
  );
};

export default CustomerAppointment;
