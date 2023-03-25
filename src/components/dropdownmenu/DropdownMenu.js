import React from 'react'
import { NavLink } from 'react-router-dom'
import "./dropdownmenu.css"

const DropdownMenu = () => {
  return (
    <>
        <ul className="dropdown">
              <li className='dropdownitems'>
                <NavLink to="/myaccount" className="links">My Account</NavLink>
              </li>
              <li className='dropdownitems'>
                <NavLink to="/appointments" className="links">Appointments</NavLink>
              </li>
              <li className='dropdownitems'>
                <NavLink to="/notifications" className="links">Notifications</NavLink>
              </li>
              <li className='dropdownitems'>
                <NavLink to="/support" className="links">Support</NavLink>
              </li>
              <li className='dropdownitems'>
                <NavLink to="/logout" className="links">Logout</NavLink>
              </li>
            </ul> 
    </>
  )
}

export default DropdownMenu