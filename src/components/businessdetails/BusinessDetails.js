import { BorderColorOutlined } from '@mui/icons-material'
import React from 'react'
import "./businessdetails.css"

const BusinessDetails = () => {

    const businessdetails = [
        {
            name: "Harry",
            description:"Hello",
            email:"harry@gmail.com",
            phone: 123456789,
            phone1: 987654321,
            address:"Assam",
            pincode: 781001
        }
    ]

  return (
  
        <div className="businessdetailssection">
        <div className="detailsformbusiness">
            {businessdetails.map((item,index) =>(
                <form item={item} key={index} >
                <div className="businessdetailitems">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                   value={item.name}
                  />
                <BorderColorOutlined style={{color:"#575757"}}/>
                </div>
                <div className="businessdetailitems">
                  <input
                    type="text"
                    id="description"
                    placeholder="Description"
                  value={item.description}
                  />
                <BorderColorOutlined style={{color:"#575757"}}/>
                </div>
                <div className="businessdetailitems">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                   value={item.email}
                  />
                  <BorderColorOutlined style={{color:"#575757"}}/>
                </div>
                <div className="businessdetailitems">
                  <label className='phonenumber' htmlFor="phone">Phone <span>+91</span></label>
                  <input
                    type="tel"
                    id="phone"
                    country="IN"
                   value={item.phone}
                  />
                  <BorderColorOutlined style={{color:"#575757"}}/>
                  <label htmlFor="phone1">+91</label>
                  <input
                    type="tel"
                    id="phone1"
                    country="IN"
                    value={item.phone1}
                  />
                 <BorderColorOutlined style={{color:"#575757"}}/>
                </div>
                <div className="businessdetailitems">
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                   value={item.address}
                  />
                 <BorderColorOutlined style={{color:"#575757"}}/>
                </div>
                <div className="businessdetailitems">
                  <input
                    type="number"
                    id="pincode"
                    placeholder="Pincode"
                   value={item.pincode}
                  />
                  <BorderColorOutlined style={{color:"#575757"}}/>
                </div>
              </form>
            ))}
        </div>
      </div>
  )
}

export default BusinessDetails