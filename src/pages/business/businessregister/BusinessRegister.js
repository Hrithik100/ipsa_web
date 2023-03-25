import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./businessregister.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Businessheader from "../../../components/header/Businessheader";

const BusinessRegister = () => {
  const [records, setRecords] = useState([]);
  const [businessRegistration, setBusinessRegistration] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    phone1: "",
    address: "",
    pincode: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setBusinessRegistration({ ...businessRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newRecord = {
      ...businessRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newRecord]);

    // setBusinessRegistration({
    //   name: "",
    //   description: "",
    //   email: "",
    //   phone: "",
    //   phone1: "",
    //   address: "",
    //   pincode: "",
    // });
  };

  const notify = () =>{
    if (businessRegistration === null) {
        toast.error("Fields can't be empty",{
            position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
        )
      }else{
        toast.success("Registration is Successful", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      }
    
    }
  

  return (
    <>
      <Businessheader />
      <div className="businessregistersection">
        <div className="businessregistersectionheader">
          <h2>Registration Form</h2>
        </div>
        <div className="registrationformbusiness">
          <form action="" onSubmit={handleSubmit}>
            <div className="businessformitems">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={businessRegistration.name}
                onChange={handleInput}
              />
            </div>
            <div className="businessformitems">
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                value={businessRegistration.description}
                onChange={handleInput}
              />
            </div>
            <div className="businessformitems">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={businessRegistration.email}
                onChange={handleInput}
              />
            </div>
            <div className="businessformitems">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                country="IN"
                value={businessRegistration.phone}
                onChange={handleInput}
              />
              <label htmlFor="phone1">Alt</label>
              <input
                type="tel"
                name="phone1"
                id="phone1"
                country="IN"
                value={businessRegistration.phone1}
                onChange={handleInput}
              />
            </div>
            <div className="businessformitems">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                value={businessRegistration.address}
                onChange={handleInput}
              />
            </div>
            <div className="businessformitems">
              <input
                type="number"
                name="pincode"
                id="pincode"
                placeholder="Pincode"
                value={businessRegistration.pincode}
                onChange={handleInput}
              />
            </div>
            <div>
              <button
                className="businesssubmitbtn"
                type="submit"
                onClick={notify}
              >
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default BusinessRegister;
