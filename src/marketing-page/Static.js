
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';

import in24 from '../img/in24.webp';
import in25 from '../img/in25.webp';





const Static   = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Static QRs

          </h2>

          <div className="Dynamic-imger">
          <img src={in24} alt="" />
          </div>
          

          <p>Static QR codes are an efficient and versatile tool for sharing information digitally. Unlike dynamic QR codes, which allow linked content to be updated without changing the physical code, static QR codes keep information constant over time, making them valuable in various situations. <br />
For example, imagine a coffee shop that offers free Wi-Fi to its customers. By using a static QR code, the coffee shop can generate a unique code that allows customers to easily connect to the Wi-Fi network. This code remains constant over time, ensuring that clients can always access the Wi-Fi network without needing to change the code.
In short, static QR codes offer a practical and reliable solution for sharing information in a constant and accessible way. Below, we present an overview of its most notable benefits.</p>
        </div>
        </div>
    </section>



    
    <section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits

      </h2>
      <p>Using QR code templates has multiple advantages: </p>
      <div className="Benefits-box">
      
          <p><span>Content stability:</span>  Once created, the content of the static QR code remains constant, ensuring that information is always available and accessible consistently.</p>

          <p><span>Simplicity of creation: </span> Static QR codes are quick and easy to generate, making them ideal for situations where quick access to specific information is needed.</p>

          <p><span>Universal Compatibility:</span> Static QR Codes are compatible with a wide range of scanning devices and apps, ensuring that anyone with a compatible device can access the content.</p>

          <p><span>No internet connection required:</span>Once the static QR code has been generated, an internet connection is not required to access the linked content, making it ideal for situations where connectivity is limited or non-existent.</p>


          <p><span>Lower complexity:</span> By not requiring a management system to update content, static QR codes are simpler to manage and maintain, making them a practical and cost-effective option for various applications.</p>


          <p><span>Reliability:</span>Since the content remains unchanged, static QR codes offer greater reliability and consistency in the delivery of information, avoiding possible errors or misunderstandings caused by frequent updates.</p>

          <p><span>Information security:</span>By not allowing changes to the content, static QR codes ensure the integrity and security of the linked information, protecting it from possible unauthorized manipulation or alteration.</p>



      </div>
    </div>
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in25} alt="" />
          </div>

   
<p>Static QR codes are a quick and easy way to share information digitally. Here's how to create and customize your own static QR codes to get the most out of them:</p>
          <ul>
            <li><span>1</span>Choosing the type of static QR: Before creating your static QR code, decide what type of information you want to share. You can opt for a URL that points to your website, a simple text, or even a contact card. Choose the type of QR that best suits your needs and the experience you want to provide to your users.  </li>
            <li><span>2</span>Adding Required Information: Once you have selected the type of static QR code, it is time to add the necessary information. It is crucial that the content is short, clear and relevant to your users. This ensures that the information is easy to understand and useful to those who scan the code. Also, verify that the information is free of spelling or grammatical errors, since you will not be able to make modifications once it is printed. If you follow these guidelines, you will ensure an optimal experience for your users and project a professional image on your QRs.</li>
            <li><span>3</span>QR Code Customization: customize your static QR code so that it reflects your brand and is easily recognizable. You can choose colors, add a frame, and adjust the design based on your brand identity. Also, consider adding a logo or custom design to make it more visually appealing.</li>
            <li><span>4</span>QR Code Download: Once you have created and customized your static QR code, download it in the format that best suits your needs. You can choose between formats such as PNG, JPG or SVG. The variety of formats will allow you to use your QR code on a variety of marketing materials, such as brochures, posters, business cards and more.
            
            
            </li>
          </ul>
          


        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Static  