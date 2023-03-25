import { EmailOutlined, HelpOutlineOutlined, KeyboardArrowDownOutlined, WhatsApp } from '@mui/icons-material'
import React from 'react'
import Businessheader from '../../../components/header/Businessheader'
import Header from '../../../components/header/Header'
import BusinessMenu from '../../../components/menus/businessmenu/BusinessMenu'

import "./businesssupport.css"

const BusinessSupport = () => {
  return (
    <>
      <Businessheader />
      <div className="businesssupportsection">
        <div className="businesssupportsectionheader">
          <h2>Support</h2>
        </div>
        <div className="businesssupportcustomercontainer">
          <div className="businesssupportcustomercontainerleft">
            <BusinessMenu />
            <div className="businesssupportverticleline"></div>
          </div>
          <div className="businesssupportcustomercontainerright">
            <div className="businesssupportcustomertop">
              <div className="businesssupportcustomertoplist">
                <div className="businesssupportcustomertoplistleft">
                  <EmailOutlined style={{color:"#383838",fontSize:40}}/>
                  <span>Drop us an email</span>
                </div>
                <div className="businesssupportcustomertoplistright">
                  <span>seller@ipsa.services</span>
                </div>
              </div>
              <div className="businesssupportcustomertoplist">
                <div className="businesssupportcustomertoplistleft">
                  <WhatsApp style={{color:"#383838",fontSize:40}}/>
                  <span>Drop us a text</span>
                </div>
                <div className="businesssupportcustomertoplistright">
                  <span>+91 67XXX 92XXX</span>
                </div>
              </div>
            </div>
            <div className="businesssupportcustomerbottom">
              <div className="businesssupportcustomerbottomlist">
                <div className="businesssupportcustomerbottomlistleft">
                  <HelpOutlineOutlined style={{color:"#383838",fontSize:40}}/>
                  <span>FAQS</span>
                </div>
                <div className="businesssupportcustomerbottomlistright">
                  <KeyboardArrowDownOutlined style={{color:"#989898",fontSize:40}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessSupport