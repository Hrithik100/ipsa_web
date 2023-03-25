import { EmailOutlined, HelpOutlineOutlined, KeyboardArrowDownOutlined, WhatsApp } from "@mui/icons-material";
import React from "react";
import Header from "../../components/header/Header";
import CustomerMenu from "../../components/menus/customermenu/CustomerMenu";
import "./support.css";

const Support = () => {
  return (
    <>
      <Header />
      <div className="supportsection">
        <div className="supportsectionheader">
          <h2>Support</h2>
        </div>
        <div className="supportcustomercontainer">
          <div className="supportcustomercontainerleft">
            <CustomerMenu />
            <div className="supportverticleline"></div>
          </div>
          <div className="supportcustomercontainerright">
            <div className="supportcustomertop">
              <div className="supportcustomertoplist">
                <div className="supportcustomertoplistleft">
                  <EmailOutlined style={{color:"#383838",fontSize:40}}/>
                  <span>Drop us an email</span>
                </div>
                <div className="supportcustomertoplistright">
                  <span>support@ipsa.services</span>
                </div>
              </div>
              <div className="supportcustomertoplist">
                <div className="supportcustomertoplistleft">
                  <WhatsApp style={{color:"#383838",fontSize:40}}/>
                  <span>Drop us a text</span>
                </div>
                <div className="supportcustomertoplistright">
                  <span>+91 67XXX 92XXX</span>
                </div>
              </div>
            </div>
            <div className="supportcustomerbottom">
              <div className="supportcustomerbottomlist">
                <div className="supportcustomerbottomlistleft">
                  <HelpOutlineOutlined style={{color:"#383838",fontSize:40}}/>
                  <span>FAQS</span>
                </div>
                <div className="supportcustomerbottomlistright">
                  <KeyboardArrowDownOutlined style={{color:"#989898",fontSize:40}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
