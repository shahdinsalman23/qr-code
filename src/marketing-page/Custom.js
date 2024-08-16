
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';



import in26 from '../img/in26.webp';
import in28 from '../img/in28.webp';
import in29 from '../img/in29.webp';
import in30 from '../img/in30.webp';


const Custom    = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Custom Domain



          </h2>

          <div className="Dynamic-imger">
          <img src={in29} alt="" />
          </div>
          

        <p>Imagine you have a local business and are looking for ways to stand out in the digital market. Have you wondered how you could make your promotions and services easier for your potential customers to find? The answer may lie in using custom QR codes with your own domain. With this tool, like "tunegocio.com", you not only simplify access to your information, but you also project a more professional and trustworthy image to your clients. Discover how this simple but powerful feature can raise the visibility of your business online, providing a more seamless experience for your customers and thus boosting your digital presence.</p>
        </div>
        </div>
    </section>



    
    <section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits</h2>
      <p>Before we dive into the details of how to use our tool, it is crucial to understand how it can benefit your brand in the vast digital world. <br />
      Have you ever wondered how having your own domain can influence the perception of your brand online? By having your own domain, your brand will project a more solid and professional image, which will generate trust among your clients and business partners. This professionalism will also make it easier for your customers to remember and return to your website in the future, increasing opportunities for engagement and conversion. In addition, your own domain allows you to create a unique and coherent identity for your brand on the web, helping you stand out in an increasingly saturated market. In short, setting up QRFY domains not only gives you a more robust online presence, but also gives you the tools necessary to boost your brand's success and credibility in the digital world.
      </p>
   
    </div>
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in30} alt="" />
          </div>

   

          <ul>
            <li><span>1</span>Go to your hosting/domain page. </li>

            <li><span>2</span>Create a subdomain like “qr.yourdomain.com”
            
            </li>

            <li><span>3</span>Go to the domain settings and find the DNS settings for the subdomain.</li>
            <li><span>4</span>To point your subdomain (e.g.:qr.yourdomain.com) to our server, we provide you with a CNAME (custom.qrfy.com) that you must add in your domain control panel.
            </li>

            <p>Clarification: This CNAME record must not be deleted after validation, otherwise, the QRs that use the custom domain will stop working.</p>


            <li><span>5</span>We also provide you with some TXT records to validate the SSL certificate. </li>

            <li><span>6</span>Once you have completed these steps, we will validate these records.
            
            </li>

            <li><span>7</span>By obtaining validation of your subdomains you will be able to use them on the platform. Please note that the validation process can take from a few minutes to several hours. We recommend waiting until the domain and SSL certificate are successfully activated in your account before creating and printing QR codes for your marketing campaigns.</li>
           
          </ul>
          
        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Custom