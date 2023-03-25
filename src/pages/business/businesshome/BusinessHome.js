import {
  CalendarMonthOutlined,
  CampaignOutlined,
  InsertChartOutlinedOutlined,
  WarehouseOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Businessheader from "../../../components/header/Businessheader";
import Header from "../../../components/header/Header";

import "./businesshome.css";

const BusinessHome = () => {
  return (
    <>
      <Businessheader/>
      <div className="businesshomesection">
        <div className="businesshomesectionheader">
          <h2>Transform your service journey - try us out today!</h2>
          <h3>Empowering Service Providers to Deliver Seamless Experiences.</h3>
        </div>
        <div className="businesshomesectiongrid">
          <div className="businesshomesectiongriditem">
            <div className="businesshomesectiongriditemleft">
              <CalendarMonthOutlined style={{ fontSize: 83 }} />
            </div>
            <div className="businesshomesectiongriditemright">
              <h3>Appointment scheduling</h3>
              <span>A sleek calendar easy to use across all devices.</span>
            </div>
          </div>
          <div className="businesshomesectiongriditem">
            <div className="businesshomesectiongriditemleft">
              <CampaignOutlined style={{ fontSize: 83 }} />
            </div>
            <div className="businesshomesectiongriditemright">
              <h3>Marketing promotions</h3>
              <span>
                Boost your sales and fill your calendar with intelligent tools
                to grow and retain clients.
              </span>
            </div>
          </div>
          <div className="businesshomesectiongriditem">
            <div className="businesshomesectiongriditemleft">
              <WarehouseOutlined style={{ fontSize: 83 }} />
            </div>
            <div className="businesshomesectiongriditemright">
              <h3>Inventory and Online Store</h3>
              <span>
                Set up your own online store and manage your stock from single
                dashboard.
              </span>
            </div>
          </div>
          <div className="businesshomesectiongriditem">
            <div className="businesshomesectiongriditemleft">
              <InsertChartOutlinedOutlined style={{ fontSize: 83 }} />
            </div>
            <div className="businesshomesectiongriditemright">
              <h3>Reporting and analytics</h3>
              <span>
                Monitor how your business is doing with live dashboards and
                financial reporting.
              </span>
            </div>
          </div>
        </div>
        <Link to="/businesshome/registration">
          <div className="businessregisterbtn">
            <span>Register Now</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BusinessHome;
