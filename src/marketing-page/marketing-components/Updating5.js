import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in15 from '../../img/in15.webp';


import f1 from '../../img/f1.webp';
import f2 from '../../img/f2.webp';


import d1 from '../../img/d1.webp';
import d2 from '../../img/d2.webp';
import d3 from '../../img/d3.webp';
import d4 from '../../img/d4.webp';
import d5 from '../../img/d5.webp';
import d6 from '../../img/d6.webp';
import d7 from '../../img/d7.webp';
import d8 from '../../img/d8.webp';



const Updating5  = () => {

 




  return (

    <>

<section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Why is it key to track your marketing metrics?
      </h2>
      <p>Tracking metrics is essential to optimizing your QR code campaigns. It gives you a clear view of who is interacting with your codes and how, allowing you to fine-tune your strategies. In addition, you will understand which aspects of your campaigns are working and which need improvement, a key aspect to maximize return on investment. Ultimately, tracking metrics provides you with the information necessary to make informed and strategic decisions that drive the success of your marketing campaigns. Below, we detail the specific benefits you can obtain by using these metrics:</p>
      <div className="Benefits-box">
      
          <p><span>Identify your target audience:</span> Detail the user's demographic data, browsing preferences, operating system and language to Personalize your marketing strategy.</p>

          <p><span>Evaluate the effectiveness of marketing strategies: </span> Discover which channels generate the most traffic and conversions to allocate resources more efficiently.</p>

          <p><span>Optimize the user experience:</span>Adjust the location and design of QR codes to improve the user experience after analyzing behavior patterns.</p>

          <p><span>Get a clear view of performance:</span>Make informed decisions by understanding which aspects of your strategy are working and which need improvemen</p>

          <p><span>Improve personalization and segmentation:</span>Obtain demographic and geographic information about your users through QR code scanning data to improve personalization and segmentation.</p>

          <p><span>Set realistic expectations and goals</span>Adjust your strategy with historical data to achieve achievable goals.</p>



      </div>
    </div>
  </div>
</section>



    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">
    
        <h4 >How to access your QR code metrics tracking tool

        </h4>
        <p>Once you have generated your QR code, you can access it through the "My QRs" section. If you have created a dynamic QR code, you will find a "Details" button in the same row of your code, next to the label that indicates its status and the download button, which will allow you to access the statistics of your QR. However, if you have created a static QR code, total scan information will not be displayed nor will there be an option to access tracking details.</p>

        <div className='new-span'>SVG format</div>
          <div className="Dynamic-imger">
          <img src={d1} alt="" />
          </div>
        
      <p>Metric data is provided in real time. That means that all the data collected is obtained instantly and reflected in your statistical report in a matter of seconds, giving you an up-to-date overview of your QR code marketing strategy.</p>
        </div>
        </div>
    </section>




    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>Track total and unique scans</div>
          <div className="Dynamic-imger">
          <img src={d2} alt="" />
          </div>
        
      <p>These metrics allow you to track two important things: total scans and unique scans. Total scans show how many times a QR code has been scanned in total, including both single and repeat scans performed by the same device. The unique scan counter, on the other hand, focuses on tracking the specific number of scans per device, giving you a more accurate understanding of how many people are interacting with your marketing message.</p>
        </div>
        </div>
    </section>


    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>Analysis according to cities and countries</div>
          <div className="Dynamic-imger">
          <img src={d3} alt="" />
          </div>
        
      <p>Tracking metrics by city and country is especially useful for multinational corporations interested in expanding their global reach and facilitating entry into new markets. Considering the IP geolocation of a user, this numerical data is sorted in descending order and divided into two columns: the total number of scans and their percentage with respect to the total</p>
        </div>
        </div>
    </section>


    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>Temporal analysis of scans</div>
          <div className="Dynamic-imger">
          <img src={d4} alt="" />
          </div>
        
      <p>Knowing the best times to launch a print marketing campaign that guarantees a good return on investment is invaluable. Our statistics page breaks down live data by month, day and time, giving you detailed information on QR code scanning metrics. This information is presented graphically, allowing you to easily identify the periods of greatest and least success of your campaigns to continually optimize them.</p>
        </div>
        </div>
    </section>

    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>Analysis of scans by operating system</div>
          <div className="Dynamic-imger">
          <img src={d5} alt="" />
          </div>
        
      <p>In addition to where and when, now you will also know which operating system your users prefer. Our statistics include the percentage of scans performed with different operating systems, such as Android, iOS, Windows, OS X, Linux and Chrome OS, giving you a better understanding to guide your marketing efforts.</p>
        </div>
        </div>
    </section>

    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>Export reports in CSV or XLS format</div>
          <div className="Dynamic-imger">
          <img src={d6} alt="" />
          </div>
        
      <p>Our scan statistics page offers you the ability to export all the metric data mentioned above to a CSV or XLS file, allowing you to easily import it into spreadsheet programs such as Excel and share it with ease.

</p>
        </div>
        </div>
    </section>

    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>Reset your scans and start again</div>
          <div className="Dynamic-imger">
          <img src={d7} alt="" />
          </div>
        
      <p>Do you need to restart your campaign or try different strategies? No problem. With QRFY, you can reset the scan counter to zero as many times as needed to improve your marketing reach.

</p>
        </div>
        </div>
    </section>

    <section className='Updating part-2 '>
    <div className="contanir">
        <div className="main-Dynamic">

        <div className='new-span'>All data in one place</div>
          <div className="Dynamic-imger">
          <img src={d8} alt="" />
          </div>
        
      <p>Do you want to know the statistics of various QRs? Go to the “Statistics” section found in the left side menu. There you can select the QRs of interest or filter by folder, operating system, country or city. Finally, you have the option to export the information in both totals and details, in CSV or XLS format..

</p>
        </div>
        </div>
    </section>


    </>
  )

}

export default Updating5