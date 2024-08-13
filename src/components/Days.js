import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';
// import step1 from '../img/steps1.svg';
// import step2 from '../img/steps2.svg';
// import step3 from '../img/steps.svg';



import das from '../img/das.png';
import error from '../img/error.png';


const Days = () => {










  return (
    <>
      <section className='Days'>
        <div className="contanir">
          <div className="main-Days">
            <div className="Days-tital">
              <h2>Try our QR code generator for 7 <br />days free.</h2>
              <img src={error} alt="" />
              <button>Register now</button>
            </div>

            <div className="days-imger">
              <img src={das} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Days