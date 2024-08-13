import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import in2 from '../../img/in2.webp';
import in3 from '../../img/in3.webp';
import in4 from '../../img/in4.webp';
import in5 from '../../img/in5.webp';
import in6 from '../../img/in6.webp';
import in7 from '../../img/in7.webp';
import in8 from '../../img/in8.webp';
import in9 from '../../img/in9.webp';
import in10 from '../../img/in10.webp';
const Updating  = () => {

 




  return (

    <>
    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
          <h4>Updating elements in QR Codess</h4>

          <div className="Dynamic-imger">
          <img src={in2} alt="" />
          </div>
          

          <p>The flexibility of dynamic QR codes allows you to modify a variety of elements to adapt your QR to the changing needs of your business. From colors and fonts to contact details, dates, descriptions, headlines and any type of file you want to add or remove, everything can be changed at any time.</p>

          <p>Updating your QR codes is essential whenever you need to reflect changes to your products or services, contact information, hours, special promotions, or content corrections. With QRFY, making these changes is quick and easy:</p>

          <ul>
            <li><span>1</span>Find the QR code you want to update in the "My QRs" section of our platform.</li>
            <li><span>2</span>Select the icon with the 3 vertical dots located at the far right of the QR.</li>
            <li><span>3</span>In the drop-down menu, click the option that says "Edit."</li>
            <li><span>4</span>You will access the view where the QR content is displayed, allowing you to make the necessary edits.</li>
            <li><span>5</span>Once you've finished making your edits, click the save icon at the top right.</li>

          </ul>
          
          <p>And ready! That's how easy it is to keep your information always fresh and updated for your clients, without complications or the need for reprints.</p>
        </div>
        </div>
    </section>



    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Change a QR code type</h3>

          <div className="Dynamic-imger">
          <img src={in3} alt="" />
          </div>
          

          <p>Do you need to change the type of QR to adapt to needs or last minute changes without having to reprint it? We've got you covered. With our dynamic QR codes, changing the QR type is easier than ever.
          </p>

          <p>Imagine that you have a restaurant and you have printed QR codes to display your menu. However, you decide to expand your online presence and prefer that customers be able to access your website to see the latest promotions and special events. With QRFY, you can easily change the QR type from "Menu" to "Webpage" simply and quickly, thus offering a more complete and updated experience for your customers.</p>
          <p>To transform your QR, follow these simple steps:</p>

          <ul>
            <li><span>1</span>Find the QR code you want to update in the "My QRs" section of our platform.</li>
            <li><span>2</span>Select the icon with the 3 vertical dots located at the far right of the QR.</li>
            <li><span>3</span>In the drop-down menu, click the option that says "Change QR Type."</li>
            <li><span>4</span>Choose the new type of QR you want to use.</li>
            <li><span>5</span>Complete the content of the QR and customize the design to your liking.</li>

          </ul>
          
          <p>It is important to remember that when changing the QR type, the current data will be deleted and cannot be recovered. Be sure to save any relevant information before committing the change.</p>
        </div>
        </div>
    </section>


    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Edit the external design of a QR code</h3>

          <div className="Dynamic-imger">
          <img src={in4} alt="" />
          </div>
          

          <p>To edit the external design of your QR codes, both dynamic and static, our platform gives you the flexibility to customize them with unique colors, logos, border styles, patterns and frames, all with an editable call to action (CTA).
          </p>

          <p>What does it mean to change the appearance of a QR code? When you adjust the external appearance (colors, logo, frame) of your QR code, you will need to reprint it to update your printed materials. However, if you use multiple versions of the same QR code with different styles, it will still redirect users to the same content, even if the external appearance is different. For example, imagine you use a QR code on a banner to promote a special offer. If you want to use the same QR code in a social media post with a different layout, you can simply modify the layout without creating a new one. Both QR codes will continue to work and direct users to the same content, tracking scans of both posts.</p>

          <p>How can you modify the design of an already created QR code?</p>

          <ul>
            <li><span>1</span>Look for the QR code you want to update in the "My QRs" section of our platform.</li>
            <li><span>2</span>Select the icon with the 3 vertical dots located at the far right of the QR.</li>
            <li><span>3</span>In the drop-down menu, click the option that says "Edit."</li>
            <li><span>4</span>You will access the view where the content of the QR is displayed.</li>
            <li><span>5</span>Click “Next” or “QR Design” at the top to access the view where you can modify the appearance of your QR.</li>
            <li><span>6</span>Once you have finished making your changes, click “Finish” at the top right.</li>

          </ul>
          
    
        </div>
        </div>
    </section>

    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
          <h4>Dynamic QR code management</h4>

          <div className="Dynamic-imger">
          <img src={in5} alt="" />
          </div>
         
        </div>
        </div>
    </section>

    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Temporarily disable a QR code</h3>

          <div className="Dynamic-imger">
          <img src={in6} alt="" />
          </div>
          

          <p>Only dynamic QR codes can be temporarily disabled. Please note that the pause option allows you to disable the QR code temporarily, while deleting it will disable it permanently. Once you complete these instructions, other users will not be able to access the QR code by scanning it. <br />
          To temporarily pause or deactivate your dynamic QR code, follow these steps:
          </p>


          <ul>
            <li><span>1</span>Find the QR code you want to pause or deactivate in the "My QRs" section of our platform.</li>
            <li><span>2</span>Select the checkbox at the far left of the QR.</li>
            <li><span>3</span>In the options menu that appears at the bottom of the screen, select the option that says “Pause.”</li>
          </ul>
          <p>Remember that pausing or deactivating a QR code preserves the data and layout, making it easy to reactivate it in the future if necessary. You can use this feature when you need to make important changes to the information you're sharing or when the content is no longer relevant.</p>
    
        </div>
        </div>
    </section>

    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Short URL Update</h3>

          <div className="Dynamic-imger">
          <img src={in7} alt="" />
          </div>
          

          <p>In addition to being accessible by scanning, dynamic QR codes also automatically generate a short URL upon creation for use on digital platforms. These short URLs are very convenient because they are easy to remember and allow tracking of scan data.
          </p>

<p>How to change the short URL of a QR code?</p>
<p>If you want to customize the short URL, you can do so during the initial setup of your QR code.</p>

          <ul>
            <li><span>1</span>Click the "+" button on the far right and choose the “Create QR” option.</li>
            <li><span>2</span>Select the type of QR you want to create and access the “Content” section.</li>
            <li><span>3</span>Go to the “Statistics” tab, where you will find the “URL Settings” option.</li>
            <li><span>4</span>Uncheck the “Generate automatically” option so that the URI field is enabled.</li>
            <li><span>5</span>Enter the sequence of characters you want to use for your URL. Please note that the short URL must be unique and cannot be repeated. If a message appears that says “URI not available”, it means that it is already in use and you will have to choose another one.</li>
          </ul>

          <p>
          Allowed characters for the URL: You can use letters (A-Z, a-z), numbers (0-9), hyphens (-) and underscores (_). No spaces or special characters are allowed.</p>

          <p>It is also possible to change the short URL after you have printed the QR code, but doing so will make the printed QR codes no longer readable. Therefore, it is important to change the short URL only when absolutely necessary, taking into account that in those cases it will be necessary to reprint the QR code.</p>
    
        </div>
        </div>
    </section>

    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Scan Tracking Reset
         </h3>

          <div className="Dynamic-imger">
          <img src={in8} alt="" />
          </div>
          

          <p>By creating QR codes with QRFY, you can access detailed scanning information in real time. This data includes the location of the scan (by city and country), the exact time of the scan, the operating system of the device used, and the difference between single and total scans. This information will begin to be collected once at least one scan has been recorded.
          </p>

<p>
Sometimes it can be useful to reset tracking data for a specific QR code, especially if you have made changes and want to evaluate the impact of these changes. Please note that resetting scan statistics is a permanent action and cannot be undone. Therefore, it is recommended to download the scan statistics before resetting them if you need the data for record keeping or analysis.</p>
<p>How to reset scanning statistics for a QR code?</p>
<p>To reset the scanning statistics of a dynamic QR code, follow these steps:</p>

          <ul>
            <li><span>1</span>From the "My QRs" section, find the QR code whose scanning statistics you want to reset and select the "Details" button located in the rightmost.</li>
            <li><span>2</span>Click the selector above and to the right of the scan graph that says "Options."</li>
            <li><span>3</span>From the drop-down menu, click "Reset Scans."</li>
          
          </ul>

          <p>
          By following these steps, you can reset the scanning statistics of your QR codes and start collecting new data to evaluate their performance.</p>

    
        </div>
        </div>
    </section>
    
    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Scan Tracking Reset
         </h3>

          <div className="Dynamic-imger">
          <img src={in8} alt="" />
          </div>
          

          <p>By creating QR codes with QRFY, you can access detailed scanning information in real time. This data includes the location of the scan (by city and country), the exact time of the scan, the operating system of the device used, and the difference between single and total scans. This information will begin to be collected once at least one scan has been recorded.
          </p>

<p>
Sometimes it can be useful to reset tracking data for a specific QR code, especially if you have made changes and want to evaluate the impact of these changes. Please note that resetting scan statistics is a permanent action and cannot be undone. Therefore, it is recommended to download the scan statistics before resetting them if you need the data for record keeping or analysis.</p>
<p>How to reset scanning statistics for a QR code?</p>
<p>To reset the scanning statistics of a dynamic QR code, follow these steps:</p>

          <ul>
            <li><span>1</span>From the "My QRs" section, find the QR code whose scanning statistics you want to reset and select the "Details" button located in the rightmost.</li>
            <li><span>2</span>Click the selector above and to the right of the scan graph that says "Options."</li>
            <li><span>3</span>From the drop-down menu, click "Reset Scans."</li>
          
          </ul>

          <p>
          By following these steps, you can reset the scanning statistics of your QR codes and start collecting new data to evaluate their performance.</p>

    
        </div>
        </div>
    </section>

    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Organization in folders
         </h3>

          <div className="Dynamic-imger">
          <img src={in9} alt="" />
          </div>
          

          <p>Organizing your QR codes into different folders can make your projects more manageable and easier to find. This functionality not only improves efficiency when managing multiple QR codes, but also facilitates collaboration within teams, allowing more orderly and systematic access to different projects. By sorting your QR codes into folders, you can separate marketing campaigns, specific promotions, events, or any other categories you need, keeping everything well structured and accessible.
          </p>

<p>
How to create a folder and add QR codes to it?</p>


          <ul>
            <li><span>1</span>From the "My QRs" section, click the "+" button on the far right.</li>
            <li><span>2</span>From the drop-down menu, select "Create Folder."</li>
            <li><span>3</span>Enter a name for your new folder and click "Create."</li>
          </ul>
          <p>To move an already created QR to a folder:</p>


          <ul>
            <li><span>1</span>Go to the QR you want to move and select the checkbox at the far left of the QR.</li>
            <li><span>2</span>In the options menu that will appear at the bottom, select the "Save to" option.</li>
            <li><span>3</span>Choose the folder where you want to save the QR and click "Save".
            </li>
          </ul>
          <p>
          By following these steps, you will be able to organize and access your QR codes efficiently, keeping your projects well organized and easily manageable.</p>

    
        </div>
        </div>
    </section>

    <section className='Updating '>
    <div className="contanir">


        <div className="main-Dynamic">
         <h3>Dynamic QR Codes: The flexibility that makes the difference
         </h3>

          <div className="Dynamic-imger">
          <img src={in10} alt="" />
          </div>
          

          <p>The edits detailed in this section can only be applied to dynamic QR codes. These codes offer the advantage of updating and modifying content later, making them a versatile and adaptable tool for any project or campaign.
          </p>

<p>How do you know if you have a dynamic or static QR code?</p>
<p>To identify if your QR code is dynamic or static, go to the user panel in the "My QRs" section. Dynamic codes will have the total scans next to them, while static codes will be identified with a yellow label that says "Static QR" on the right.</p>


<p>
Remember that only dynamic QR codes allow content to be updated later, so it is important to verify this distinction before making any edits.</p>




    
        </div>
        </div>
    </section>

    </>
  )

}

export default Updating