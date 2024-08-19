import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';
import login from '../img/login-site.png';






const Login = () => {


  const navigate = useNavigate();




  const sigup = () => {
    navigate("/signup");
  };

  const dachbord = () => {
    navigate("/NewQR");
  };


  return (

    <>
 
<section className='login'>
  <div className="main-login">
    <div className="part-login-1">
      <form action="">
        <h2>Login</h2>
        <p>Enter with your networks or complete your data</p>

        <div className="login-input-group">
          <label htmlFor="">Email*</label>
          <input type="email" />
        </div>

        <div className="login-input-group">
          <label htmlFor="">Password*</label>
          <input type="Password" />
        </div>


<span> Have you forgotten your password? <a>Click here</a></span>

<button onClick={dachbord}>Log In</button>


<span> Don't have an account? <a onClick={sigup}>Create an account</a></span>

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

export default Login