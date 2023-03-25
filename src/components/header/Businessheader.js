import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "../dropdownmenu/DropdownMenu";
import "./header.css";
import ipsaLogo from "../../assets/ipsa-logo.png";
import ipsaText from "../../assets/ipsa-text.png";
import { DensityMediumOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import BusinessDropdown from "../dropdownmenu/BusinessDropdown";


const Businessheader = () => {

    const [openMenu, setOpenMenu] = useState(false);
  // const [isSeller, setIsSeller] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <header>
      <Link to="/" className="headerleft">
        <img id="brandlogo" src={ipsaLogo} alt="" />
        <img id="brandtext" src={ipsaText} alt="" />
      </Link>
      <div className="headerright">
        {/* <div
          className="businesscustomerbtn"
          onClick={() => setIsSeller(!isSeller)}
        >
          {isSeller === false ? (
            <Link to="/businesshome">
              <button className="businesscustomer">
                <span>For Business</span>
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className="businesscustomer">
                <span>For Customer</span>
              </button>
            </Link>
          )}
        </div> */}
           <div
          className="businesscustomerbtn"
        >
            <Link to="/">
              <button className="businesscustomer">
                <span>For Customer</span>
              </button>
            </Link>
        </div>
        <div ref={menuRef}>
          <DensityMediumOutlined
            style={{ fontSize: 40 }}
            className="menubutton"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
          {openMenu && <BusinessDropdown />}
        </div>
      </div>
    </header>
  )
}

export default Businessheader