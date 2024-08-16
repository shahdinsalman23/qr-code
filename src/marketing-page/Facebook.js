
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import in40 from '../img/in40.webp';

import in21 from '../img/in21.webp';





const Facebookin  = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Google and Facebook pixel integration

          </h2>

          <div className="Dynamic-imger">
          <img src={in40} alt="" />
          </div>
          

          <p>Imagine having the ability to follow every step your customers take when they interact with your QR codes. With our platform, you can now easily integrate Google and Facebook pixels into your QRs, allowing you to gain valuable insights into how your audience interacts with your digital content. From knowing which links are the most visited to understanding your users' browsing patterns, this functionality provides you with a detailed and strategic view of each click and action performed through your QR.</p>
        </div>
        </div>
    </section>



    
<section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits
      </h2>
      <p>The central benefit of integrating Google and Facebook pixels into your QR codes is conversion tracking optimization. This allows you to track detailed conversions from QR scanning to actions taken on your website. This way, you can accurately measure the performance of your QR campaigns, identify which strategies generate results, and optimize your digital marketing efforts based on concrete data.</p>

      <p className='padding-top'>For example, imagine that you are promoting a new menu in your restaurant using a QR. By integrating Google and Facebook pixels, you will not only be able to count how many people scan the QR, but also which dishes or sections of the menu are most popular with your customers. This information helps you adjust your marketing strategy and offer more effective promotions based on your audience's specific interests.</p>
   
    </div>
  </div>
</section> 



<section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in21} alt="" />
          </div>
        
          <p>To integrate the Google and/or Facebook pixel into your QR and start tracking key events, follow these steps:</p>

   

          <ul>
            <li><span>1</span>Select the option to create or edit a QR on our platform.</li>
            <li><span>2</span>In the advanced settings section of the QR, enter the Google Analytics 4 Tracking ID, Facebook Pixel ID, or Google Tag Manager ID depending on your needs. You can copy and paste the IDs provided by Google and Facebook into the corresponding fields.</li>
            <li><span>3</span>Once the necessary IDs have been entered, the QR creation or editing process ends as usual.</li>
            <li><span>4</span>Access the Google Analytics 4 platform, Facebook Business Manager or other platforms where you have configured pixels. From there you can monitor and analyze the events recorded by the pixel in your QR.</li>

            <li><span>5</span>Use the data collected on external platforms to adjust your digital marketing strategies. Analyze QR performance and make improvements based on insights obtained from Google and Facebook.
            </li>
          </ul>

<p>
With these simple steps, you will be able to integrate and make the most of the Google and Facebook pixel in your QRs, optimizing your campaigns and improving the effectiveness of your digital marketing strategies.</p>

        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Facebookin 