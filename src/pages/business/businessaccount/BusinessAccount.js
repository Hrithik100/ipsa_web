import React from 'react'
import BusinessDetails from '../../../components/businessdetails/BusinessDetails'
import Businessheader from '../../../components/header/Businessheader'
import Header from '../../../components/header/Header'
import BusinessMenu from '../../../components/menus/businessmenu/BusinessMenu'
import "./businessaccount.css"

const BusinessAccount = () => {
  return (
    <>
    <Businessheader/>
    <div className="businessaccountsection">
        <div className="businessaccountsectionheader">
          <h2>My Account</h2>
        </div>
        <div className="businessaccountcustomercontainer">
          <div className="accountbusinesscontainerleft">
            <BusinessMenu />
          </div>
          <div className="verticlelinebusinessaccount"></div>
          <div className="accountbusinesscontaierright">
           <BusinessDetails/>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessAccount