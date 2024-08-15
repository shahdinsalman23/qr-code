
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in1 from '../../img/in1.webp';






const Dynamic = () => {

 




  return (

    <>
    <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Editing dynamic QR codes</h2>

          <div className="Dynamic-imger">
          <img src={in1} alt="" />
          </div>
          

          <p>Static QR codes are an efficient and versatile tool for sharing information digitally. Unlike dynamic QR codes, which allow linked content to be updated without changing the physical code, static QR codes keep information constant over time, making them valuable in various situations.
For example, imagine a coffee shop that offers free Wi-Fi to its customers. By using a static QR code, the coffee shop can generate a unique code that allows customers to easily connect to the Wi-Fi network. This code remains constant over time, ensuring that clients can always access the Wi-Fi network without needing to change the code.
In short, static QR codes offer a practical and reliable solution for sharing information in a constant and accessible way. Below, we present an overview of its most notable benefits.</p>
        </div>
        </div>
    </section>
    </>
  )

}

export default Dynamic