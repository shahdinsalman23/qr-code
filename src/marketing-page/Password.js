
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';




import in31 from '../img/in31.webp';
import in32 from '../img/in32.webp';


const Password     = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Password access protection



          </h2>

          <div className="Dynamic-imger">
          <img src={in31} alt="" />
          </div>
          

        <p>Imagine having the ability to add an extra layer of security to your QR codes to control who can access the information once scanned. With the password access protection feature, you can do just that. It's an effective way to keep your data confidential and ensure that only authorized people can see what's behind the QR.</p>
        </div>
        </div>
    </section>



    
    <section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits</h2>
   <p>Integrating password access protection into your QR codes offers several significant benefits. First, it gives you complete control over who can access the content of the QR by requiring a password to open it. This provides an additional layer of security, ensuring that only authorized people can view the information. In addition, it adds additional protection to your sensitive or exclusive data, preserving confidentiality and minimizing the risk of unauthorized disclosure.
   </p>

   <p>Imagine a promotional campaign where you place QRs in print or digital ads that take users to exclusive offers in your online store. By adding password protection, you limit access to these offers only to subscribers on your mailing list who know the password, increasing exclusivity and interest in the offer. This feature ensures that your QRs can be used securely, maintaining privacy and controlling who can interact with your content.</p>
   
    </div>
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in32} alt="" />
          </div>

   <p>To use password access protection on your QR codes, follow these steps:</p>

          <ul>
            <li><span>1</span>Select the type of QR you want to create or edit.  </li>

            <li><span>2</span>In the QR Settings tab, find the “Password” option.
            
            </li>

            <li><span>3</span>Activate this functionality by checking the corresponding box.</li>
            <li><span>4</span>Select a secure password that users must enter to access the QR content.
            </li>

       


           
          </ul>
          

          <p>Once set, the password will be applied to the QR, ensuring that only those who know the password can access the protected content. </p>
        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Password 