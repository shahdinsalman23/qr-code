
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in10 from '../../img/in10.webp';
import in11 from '../../img/in11.webp';





const Dynamic2 = () => {

 




  return (

    <>
    <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Dynamic QR</h2>

          <div className="Dynamic-imger">
          <img src={in11} alt="" />
          </div>
          

          <p>Dynamic QR codes are an incredibly convenient tool that allows you to update content without needing to change the physical code. This makes it much easier to keep information up to date and relevant, which is crucial to quickly adapt to the changing needs of your business and always offer the best experience to your users. Compared to static QR codes, dynamic QR codes provide greater flexibility and functionality. Here are the reasons why choosing dynamic QR codes is an excellent decision.</p>
        </div>
        </div>
    </section>
    </>
  )

}

export default Dynamic2