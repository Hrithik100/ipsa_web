import React from "react";
import CustomerDetails from "../../components/customerdetails/CustomerDetails";
import Header from "../../components/header/Header";
import CustomerMenu from "../../components/menus/customermenu/CustomerMenu";
import "./myaccount.css";

const MyAccount = () => {
  return (
    <>
      <Header />
      <div className="myaccountsection">
        <div className="myaccountsectionheader">
          <h2>My Account</h2>
        </div>
        <div className="myaccountcustomercontainer">
          <div className="myaccoutcustomercontainerleft">
            <CustomerMenu />
          </div>
          <div className="verticleline"></div>
          <div className="myaccountcustomercontaierright">
            <CustomerDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
