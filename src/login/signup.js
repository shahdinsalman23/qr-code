import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';
import login from '../img/login-site.png';






const Signup = () => {


  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const logins = () => {
    navigate("/login");
  };

  



  return (

    <>
 
<section className='login'>
  <div className="main-login">
    <div className="part-login-1">
      <form action="">
        <h2>Sign Up</h2>
        <p>Enter with your networks or complete your data</p>

        <div className="login-input-group">
          <label htmlFor="">Name*</label>
          <input type="text" />
        </div>

        <div className="login-input-group">
          <label htmlFor="">Email*</label>
          <input type="email" />
        </div>

        <div className="login-input-group">
          <label htmlFor="">Password*</label>
          <input type="Password" />
        </div>


        
        <div className="login-input-group">
          <label htmlFor="">Confirm Password*</label>
          <input type="Password" />
        </div>


<span> Have you forgotten your password?  <a>Click here</a></span>

<button>Sign Up</button>


<span> Have an account? <a onClick={logins}>Login</a></span>

      </form>
    </div>
    <div className="part-login-2">
<img src={login} alt="" />
    </div>
  </div>
</section>



    </>
  )

}

export default Signup