import { LocationOnOutlined, StarBorderOutlined } from "@mui/icons-material";
import React from "react";
import Header from "../../components/header/Header";
import "./shop.css";

const Shop = () => {
  return (
    <>
    <Header/>
    <div className="shopsection">
      <div className="shopsectionresult">
        <div className="shopsectionresultleft">
          <h2>Results</h2>
        </div>
        <div className="shopsectionresultright">
          <div className="shopsectionfilterleftitem">
            <span>Filter by</span>
          </div>
          <div className="shopsectionfilterrightitem">
            <span>Sort by</span>
          </div>
        </div>
      </div>
      <div className="shopitems">
        {/* <div className="shopitem">
          <div className="shopitemimage">
            <span>Coming Soon</span>
          </div>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <span>Coming Soon</span>
          </div>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <span>Coming Soon</span>
          </div>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <span>Coming Soon</span>
          </div>
        </div> */}
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
        <div className="shopitem">
          <div className="shopitemimage">
            <div className="shopstatus">
              <span>Status</span>
            </div>
          </div>
          <div className="shopdetails">
            <div className="shopdetailstop">
              <div className="shopname">
                <span>Business Name</span>
              </div>
            </div>
            <div className="shopdetailsbottom">
              <div className="shopdetaillocation">
                <LocationOnOutlined/>
                <span>Location</span>
              </div>
              <div className="shopdetailrating">
                <StarBorderOutlined/>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <button className="bookbtn">
              <span>Book Appointment</span>
            </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Shop;
