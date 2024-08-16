
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';



import in26 from '../img/in26.webp';
import in28 from '../img/in28.webp';




const Bulk    = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Bulk creation and download


          </h2>

          <div className="Dynamic-imger">
          <img src={in28} alt="" />
          </div>
          

          <p>Managing and generating large quantities of QR codes can be an arduous task, but our bulk creation and download tools make this process fast and efficient. Imagine a company hosting an event that needs to create dynamic vCard QRs for all of its employees, or a retailer that needs to generate static QR codes with product information to organize inventory. These tools allow you to save time and effort, making it easier to manage your projects. Furthermore, you don't need to worry about having advanced technical knowledge; With QRFY, mass QR code creation is intuitive and accessible.</p>
        </div>
        </div>
    </section>



    
    <section className='Benefits'>
  <div className="contanir">


  <div className="main-Benefits-gap">
    <div className="main-Benefits">
      <h2>Benefits of mass creation</h2>
      <p>Mass creation of QR codes not only simplifies the management of large volumes of information, but also offers a number of crucial advantages for various business and organizational applications:
      </p>
      <div className="Benefits-box">
      
          <p><span>Operational efficiency:</span>  with a With just one click, you can generate all the necessary codes, saving you hours of manual work. This efficiency is crucial for large-scale projects.</p>

          <p><span>Speed: </span> Bulk creation allows large volumes of data to be processed quickly, which is essential in tight deadline situations.</p>

          <p><span>Uniformity and consistency:</span> ensures that all codes maintain a consistent layout and format, which is vital to maintaining a professional and consistent image.</p>

          <p><span>Large-scale customization:</span> you can create custom QR codes for each member of a team or product in an inventory. For example, if your company is participating in a conference, you can generate vCards for all team members by simply uploading a CSV file with their data.</p>
      </div>
    </div>







    <div className="main-Benefits">
      <h2>Benefits of Bulk Download
</h2>
      <p>The mass download of QR codes offers multiple advantages that simplify the management and distribution of digital information in an efficient and organized manner:
      </p>
      <div className="Benefits-box">
      
          <p><span>Simplified organization:</span>  facilitates the organization and distribution of QR codes on materials printed or digital. Having all the codes ready to download in a single file optimizes logistics.</p>

          <p><span>Convenience and accessibility:</span>allows you to have all QR codes available in a downloadable file, ready to be used anytime, anywhere.</p>
          <p><span>Flexibility and adaptability:</span> facilitates rapid response to changes or unforeseen needs, as all QR codes can be easily accessed. This is especially useful for dynamic marketing campaigns or events with multiple activities.</p>
          <p><span>Distribution efficiency: </span> simplifies the process of integrating QR codes into various platforms and materials, improving operational efficiency. For example, once you have all the QR codes downloaded, you can quickly integrate them into presentations, brochures, or promotional materials.</p>

      </div>
<br />
      
      <p >
          These tools allow for more efficient and organized management of QR codes, ensuring you can focus on what really matters: delivering great content and service to your customers.</p>
    </div>

    </div>
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in26} alt="" />
          </div>

   
<p>Now that you know the benefits of creating and downloading QR codes in bulk, we show you how to use this tool with a simple step by step:</p>

<h4>Mass creation of QR Codes</h4>
          <ul>
            <li><span>1</span>Access the "Create massive QRs" section in the left side menu  </li>

            <li><span>2</span>Select the type of QR you want to generate in quantity and customize the design, including colors and frames that will be applied uniformly to all QRs.
            
            </li>

            <li><span>3</span>Download the example CSV file and replace the example data with the information required for your QRs.</li>
            <li><span>4</span>Load the updated CSV with the data for each QR and you will find all the codes listed in the "My QRs" section.
            
            
            </li>
          </ul>
          
          <h4>Bulk download of QR Codes</h4>
          <ul>
            <li><span>1</span>From the “My QRs” section, select all the QR codes you want to download by clicking on the selection box located at the far left of each one. </li>

            <li><span>2</span>Click on the “Download” button that will appear in the lower menu       
            
            </li>

            <li><span>3</span>Select in which format you want to download your QRs: PNG, SVG, EPS, PDF. You can also customize the download by choosing the size of your QRs.</li>
            <li><span>4</span>Once downloaded, save the file to your device and use it as needed.
            
            
            </li>
          </ul>
<p>The CSV files generated are compatible with spreadsheet programs such as Excel and OpenOffice Calc, making it easy to import and export data, allowing you to manage and manipulate your QR codes quickly and efficiently. <br />
With the creation and mass download of QR codes, you will be able to manage your QR codes more efficiently and organizedly, ensuring that you can focus on what really matters: offering excellent content and service to your customers.</p>
        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Bulk   