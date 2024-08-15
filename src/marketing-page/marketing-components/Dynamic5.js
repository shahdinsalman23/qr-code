
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in20 from '../../img/in20.webp';






const Dynamic5 = () => {

 




  return (

    <>
    <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Complete analytics
          </h2>

          <div className="Dynamic-imger">
          <img src={in20} alt="" />
          </div>
          

          <p>Would you like to know if your marketing efforts are really reaching your audience? With QR codes and their tracking function, you have a powerful tool to give traditional marketing an innovative boost. These codes not only enrich your printed material, but also give you the ability to understand the real impact of your ads, from the first contact to the final conversion. If you're ready to take your marketing strategies to the next level, dynamic QR codes are your solution, offering editing and tracking features to optimize your campaigns over time. But what does this tracking function really entail? And how can it help you calculate and improve your return on investment? Discover it here!</p>
        </div>
        </div>
    </section>
    </>
  )

}

export default Dynamic5