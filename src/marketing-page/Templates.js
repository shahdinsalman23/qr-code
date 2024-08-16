
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';
import in22 from '../img/in22.webp';

import in23 from '../img/in23.webp';





const Templates  = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Templates

          </h2>

          <div className="Dynamic-imger">
          <img src={in22} alt="" />
          </div>
          

          <p>QR code templates are a powerful tool that allows users to save and reuse custom QR code designs. This includes colors, frames, styles and logos, providing an efficient way to maintain visual consistency across multiple QR codes.</p>
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
      
          <p><span>Time savings:</span> you don't need to design each QR code from scratch. Simply apply a predefined template to create new codes quickly.</p>

          <p><span>Brand Consistency: </span>Maintain a consistent appearance across all your QR codes, which helps strengthen your brand recognition.</p>

          <p><span>Simplicity:</span>easily save and access your templates, making it easy to manage complex designs.</p>

          <p><span>Versatility:</span>the templates can be used in both individual QR code creation and mass generation, adapting to various needs.</p>

  



      </div>
    </div>
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in23} alt="" />
          </div>
         <h5>How to create templates?</h5>
   

          <ul>
            <li><span>1</span>Access the templates section from the vertical menu.</li>
            <li><span>2</span>Click on the "Create template" button to get started.</li>
            <li><span>3</span>Enter a name for the template and select styles, colors, and a frame.</li>
            <li><span>4</span>Click "Save" to save your new template..</li>
          </ul>
          <h5>How to create templates?</h5>
          <ul>
            <li><span>1</span>In the last step of creating the QR, you will find a tab with a checkbox next to the text "Save template when finished." Click on it and enter a reference name for your template.</li>
            <li><span>2</span>Select colors, styles, a frame, and a logo.</li>
            <li><span>3</span>By clicking "Finish", you will not only have created your QR, but you will also have saved the design of that QR as a template to use again whenever you want.</li>
          </ul>


          <h5>Application of templates in the creation and editing of QR codes</h5>

          <p>When creating or editing a QR code, you can always select one of your templates in the last step, in the QR Design section. Simply click on "Templates" and choose the one you prefer. You will see the design applied on the right margin.
          </p>

          <p>Using QR code templates makes it much easier to manage and maintain a consistent visual identity. This allows you to focus on the content of your QRs, ensuring consistency and quality without having to redesign each time.</p>
        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Templates 