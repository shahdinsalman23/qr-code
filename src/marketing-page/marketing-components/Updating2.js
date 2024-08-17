
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in12 from '../../img/in12.webp';

const Updating2  = () => {

 




  return (

    <>

<section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits</h2>
      <div className="Benefits-box">

          <p><span>Tracking and Analytics:</span> get valuable insights into the performance of your QR codes, including the number of scans, geographic locations, devices used, and times of day when most scans are performed. Easily analyze your audience's behavior and optimize your campaigns.</p>


          <p><span>Real-Time Update:</span> With dynamic QR codes, you can update linked content (URL, text, images, videos, etc.) instantly, without needing to reprint the codes. physical codes. Adjust your content according to the latest news and needs of your business, without incurring additional costs or delays in implementation.</p>


          <p><span>Bug Fixes:</span>Did you make a mistake in the content of your code? No problem, you don't need to make a new one. Simply update the information and fix the error quickly and easily, ensuring your users always access the correct data.</p>


          <p><span>Cost Savings:</span>avoid unnecessary expenses by avoiding reprinting QR codes every time you need to make a change. Additionally, centralized management reduces the time and resources required to maintain your campaigns, allowing you to invest your resources in other key areas of your business, maximizing your return on investment (ROI) and improving your long-term profitability.</p>


          <p><span>Using Short URLs: </span>Short URLs in your QR codes make life easier: they are easier to use and remember. In addition, they can carry any type of content, optimize code space and make accessing information quick and easy.</p>


          <p><span>Adaptation to Marketing Campaigns: </span>marketing is always changing, and with dynamic QR codes, you can update your campaigns at any time to keep them fresh and attractive. This way, you will always have the most relevant information and you can test which content works best. Adapt and optimize on the fly!</p>


          <p><span>Security and Management:</span>protect your QR codes with passwords and adjust their availability as needed. You can pause the codes or have them expire after a while, improving the security and control of your information. This gives you peace of mind and full control over your digital assets, ensuring safe and compliant use.</p>

      </div>
    </div>
  </div>
</section>



    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in12} alt="" />
          </div>
        
          <p>Creating and customizing dynamic QR codes is easy and offers a variety of features and possibilities. Here's a quick guide to get the most out of them:</p>
   



          <div className="Choice-box">
            <h5>Choice of dynamic QR type:</h5>
            <span>When choosing the type of dynamic QR, think about the information you want to share and how your customers will interact with it. Select the type of QR that best suits your needs and the experience you want to provide to your users. For example, if you own a restaurant, a QR menu can be ideal for displaying your selection of dishes and prices quickly and easily.</span>
          </div>



          <div className="Choice-box">
            <h5>Added required information:</h5>
            <span>When you add information to your QR, be sure to include all the necessary details to offer a complete experience to your users. Consider what types of files or data are most relevant to your target audience and make sure the information is clear and easy to understand. For example, if you're sharing a menu, be sure to include all available dishes with their descriptions, prices, and reference images.</span>
          </div>


          <div className="Choice-box">
            <h5>QR code customization:</h5>
            <span>Customize your QR code to reflect your brand and make it easily recognizable. Choose colors, fonts, and visual elements that align with your brand identity. Additionally, consider the option of scheduling the QR availability time and configuring the URL for better identification by users.</span>
          </div>


          
          <div className="Choice-box">
            <h5>QR code download:</h5>
            <span>Download your QR code in the format that best suits your needs, such as SVG, EPS, JPG, PNG or PDF. Having a variety of formats allows you to easily adapt it to different marketing materials, such as brochures, posters, business cards and more, for effective distribution.</span>
          </div>

        </div>
        </div>
    </section>




    </>
  )

}

export default Updating2