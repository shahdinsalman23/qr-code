import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in18 from '../../img/in18.webp';






const Dynamic4 = () => {

 




  return (

    <>
    <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Variety of download formats
          </h2>

          <div className="Dynamic-imger">
          <img src={in18} alt="" />
          </div>
          

          <p>At QRFY, we offer you a wide variety of formats to download your QR codes, giving you the flexibility to adapt them to your specific needs. In the following sections, we will guide you step by step through the download process and explore the advantages of each format so that you can make informed decisions and get the most out of your QR codes.</p>
        </div>
        </div>
    </section>
    </>
  )

}

export default Dynamic4