import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./logout.css";

const Logout = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({email,password})
  }
  return (
    <>
      <Header />
      <div className="logoutsection">
        <div className="logoutsectiontop">
          <div className="logoutsectiontopnotification">
            <span>You've been logged out.</span>
          </div>
        </div>
        <div className="logoutsectionmid">
          <div className="logoutsectionmidheader">
            <span>Existing User?</span>
          </div>
          <div className="logoutsectionmidform">
            <form action="">
              <div className="logoutsectionmidformitems">
                <EmailOutlined style={{fontSize:28,color:"#696969"}}/>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div className="logoutsectionmidformitems">
                <LockOutlined style={{fontSize:28,color:"#696969"}}/>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required={true}
                />
              </div>
              <div>
                <button className="logoutsectionmidformbtn" type="submit" onClick={handleApi}>
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="logoutsectionbottom">
          <div className="logoutsectionbotheader">
              <span>New User?</span>
          </div>
          <div>
            <button className="logoutsectionbotbtn">
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
