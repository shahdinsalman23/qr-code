
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


import in13 from '../../img/in13.webp';





const Dynamic3 = () => {

 




  return (

    <>
    <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Collaborating users</h2>

          <div className="Dynamic-imger">
          <img src={in13} alt="" />
          </div>
          

          <p>Imagine that you are leading a team in a company and you need an efficient way to coordinate tasks and share information between different departments. Have you wondered how you could improve collaboration and organization to achieve your goals more effectively? The answer could be in inviting users on our QR generation platform.</p>

          <p>   Let's say you're the leader of the marketing team at a growing company. Recently, you have implemented a strategy that uses QR codes to improve interaction with customers. Now, you find yourself in the need to manage these QRs in a collaborative and efficient way between your marketing team and other departments.</p>
          <p>With our user invitation tool, you can assign specific roles to each team member. For example, you could give the IT department access to set up custom domains, while the company manager can have full Administrator access to make payments and manage subscriptions.</p>
          

          <p>Meanwhile, the rest of the marketing team can have access to create and manage QRs, allowing them to make changes as needed and evaluate ROI in real time. This flexibility and adaptability in roles and permissions not only facilitates collaboration between departments, but also improves efficiency and productivity throughout the company. Discover how this feature can streamline project management and promote synergy between teams, driving business success.</p>
        </div>
        </div>
    </section>
    </>
  )

}

export default Dynamic3