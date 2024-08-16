
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import { baseurl } from '../baseurl';
import Header from '../header/header';




import in50 from '../img/in50.webp';
import in51 from '../img/in51.webp';


const Tracking     = () => {

 




  return (

    <>
      <Header />
      <section className='Dynamic'>
    <div className="contanir">


        <div className="main-Dynamic">
          <h2>Event tracking



          </h2>

          <div className="Dynamic-imger">
          <img src={in50} alt="" />
          </div>
          

        <p>Event tracking in QR codes is a very useful tool that allows you to see how users interact with the links or buttons that you have put in your QR code. Imagine a university uses QR codes to link to bibliographies, instructional videos, and workshop registration forms. With event tracking, the university can see which of these resources are most used by students and adjust their programs accordingly to offer better educational support. <br />
        In addition to knowing how many times your QR has been scanned, you can get a clear picture of how users interact with the content you offer. Now, let's look at some of the benefits this can bring.</p>
        </div>
        </div>
    </section>



    
    <section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits
      </h2>
   <p>Event tracking in QR codes gives you a detailed view of your users' behavior. By recording each click on the links or buttons in your QR, you gain valuable insights into which aspects of your digital content are most attractive to your audience. This data allows you to strategically adjust your campaigns and content to maximize the engagement and effectiveness of your messages. Additionally, it makes it easy to personalize your interactions with users, ensuring that each experience is relevant and meaningful.
   </p>

   <div className="Benefits-box">
      
      <p><span>Understanding and personalizing user behavior: </span>By knowing which links or buttons users click on, you gain valuable information about their interests and preferences, allowing you to create detailed profiles and segment your audience. more effective way. Understanding their behavior allows you to anticipate their needs and offer personalized recommendations, providing a more relevant and attractive experience, which in turn increases user engagement and satisfaction.</p>

      <p><span>Optimizing campaign effectiveness:</span>  With accurate user engagement data, you can identify which elements of your campaigns are getting the most attention. This allows you to adjust and optimize your strategies, such as improving the most popular content, redirecting traffic to key pages, or increasing the visibility of offers and promotions. This way, you can make informed decisions to maximize the impact and effectiveness of your marketing efforts.</p>

      <p><span>Performance measurement: </span>This tool allows you to measure the performance of your campaigns in real time, quickly identifying which elements are working and which need adjustments. You can track key metrics like click-through rate and interaction time, allowing you to evaluate the effectiveness of different tactics and make immediate adjustments. Additionally, by analyzing this data, you can detect patterns and trends that will help you improve future campaigns, ensuring a results-based approach.</p>

      <p><span>Saving time and resources:</span> By having a clear vision of what is working, you can focus your efforts and resources on the areas that really matter, avoiding wasting time on ineffective tactics. This not only reduces operating costs but also improves the overall efficiency of your equipment. With accurate and detailed information, you can prioritize the activities that generate the greatest results, optimize budget and time allocation, and ensure that each action has a meaningful impact.</p>



  </div>

<p className='hello-padding'>
With this functionality, you can not only track the number of scans of your QR codes, but also get a detailed picture of how users interact with the content you offer, which is crucial for any successful marketing strategy.</p>
    </div>
    
  </div>
</section>







    <section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4>How to use</h4>

          <div className="Dynamic-imger">
          <img src={in51} alt="" />
          </div>

   <p>For your QR to start collecting information about the clicks that users make on the QR links and buttons, you must activate this functionality as follows:</p>

          <ul>
            <li><span>1</span>Select the type of QR you want to create or edit.  </li>

            <li><span>2</span>In the second step of creating the QR, in the “Content” section, click on the “Statistics” tab.
            
            </li>

            <li><span>3</span>Within the “Statistics” tab, select “Tracking Analysis” and activate this function by clicking on the “Event Tracking” toggle.</li>

            <li><span>4</span>Finish the QR creation process as usual.  
            </li>
          </ul>
          

          <p>From this moment on, the QRs in which you have activated this functionality will begin to collect information about clicks on links and buttons in their content. <br />
If you want to see how many clicks have been made so far and on which buttons, follow these steps: </p>


<ul>
            <li><span>1</span>From the “My QRs” section, locate the QR for which you want to see the recorded events.</li>

            <li><span>2</span>Click on the right button of the QR, where it says “Details”.
            
            </li>

            <li><span>3</span>Scroll to the bottom and you will find the “Events” tab.</li>

            <li><span>4</span>When you click on it, you will be able to find the buttons and links that have been clicked listed.
            </li>
          </ul>

<p>
You can also access the visualization of the events from the “Statistics” section:</p>


<ul>
            <li><span>1</span>Access the “Statistics” section and select from the “QR Code” selector the QR(s) you want to see the events.</li>

            <li><span>2</span>Scroll to the bottom and you will find the “Events” tab.
            
            </li>

            <li><span>3</span>When you click on it, you will be able to find the buttons and links that have been clicked listed.</li>

          </ul>

          <p>
Remember that there may be a delay of a few minutes until the latest events are reflected.
With this functionality activated, you will be in control of how your QRs interact with your audience. Be sure to regularly review logged events to optimize your strategies and always deliver an exceptional user experience.</p>
        </div>
        </div>
    </section>

      <Footer/>
    </>
  )

}

export default Tracking 