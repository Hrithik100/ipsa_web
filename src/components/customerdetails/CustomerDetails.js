import { BorderColorOutlined } from "@mui/icons-material";
import React from "react";
import "./customerdetails.css";

const CustomerDetails = () => {
  const customerdetails = [
    {
      name: "Tom",
      description: "Hi",
      email: "tom@gmail.com",
      phone: 123456789,
      phone1: 987654321,
      pincode: 781014,
    },
  ];

  return (
    <div className="customerdetailssection">
      <div className="detailsformcustomer">
        {customerdetails.map((item, index) => (
          <form item={item} key={index}>
            <div className="customerdetailitems">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={item.name}
              />
              <BorderColorOutlined style={{ color: "#575757" }} />
            </div>
            <div className="customerdetailitems">
              <input
                type="text"
                id="description"
                placeholder="Description"
                value={item.description}
              />
              <BorderColorOutlined style={{ color: "#575757" }} />
            </div>
            <div className="customerdetailitems">
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={item.email}
              />
              <BorderColorOutlined style={{ color: "#575757" }} />
            </div>
            <div className="customerdetailitems">
              <label className="phonenumber" htmlFor="phone">
                Phone <span>+91</span>
              </label>
              <input type="tel" id="phone" country="IN" value={item.phone} />
              <BorderColorOutlined style={{ color: "#575757" }} />
              <label htmlFor="phone1">+91</label>
              <input type="tel" id="phone1" country="IN" value={item.phone1} />
              <BorderColorOutlined style={{ color: "#575757" }} />
            </div>
            <div className="customerdetailitems">
              <input
                type="number"
                id="pincode"
                placeholder="Pincode"
                value={item.pincode}
              />
              <BorderColorOutlined style={{ color: "#575757" }} />
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
