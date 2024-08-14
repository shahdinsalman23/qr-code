import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



import in15 from '../../img/in15.webp';

import f1 from '../../img/f1.webp';
import f2 from '../../img/f2.webp';
import f3 from '../../img/f3.webp';
import f4 from '../../img/f4.webp';
import f5 from '../../img/f5.webp';


const Updating4  = () => {

 




  return (

    <>

<section className='Benefits'>
  <div className="contanir">
    <div className="main-Benefits">
      <h2>Benefits
      </h2>
      <p>Offering multiple formats for downloading QR codes provides invaluable flexibility to users by allowing them to adapt their QRs to a variety of needs and contexts. Each format has its own unique features that can be leveraged based on the user's specific preferences and requirements. From the high quality and scalability of SVG, to the compression efficiency of JPG, to the accuracy of EPS reproduction and the versatility of PNG, and now also the portability of PDF, the availability of multiple options ensures that users can Find the perfect format for your specific applications. Do you want to discover how to use this tool? Keep reading!</p>
  
    </div>
  </div>
</section>

<section className='Updating  part-2'>
    <div className="contanir">


        <div className="main-Dynamic">
         <h4 className='hello-style'>How to download QR codes in QR code generator
         </h4>

        
          <p>Once you have your QR design ready, the next step will be to download it so you can add it to any media you plan to use it in, whether digital or printed.</p>

          <p>At the end of the process of creating your QR, you will be able to access it through the "My QRs" section and in the same row, you will find a button that says “Download”.</p>

          <p>By clicking on it, you will have access to a wide variety of download formats: PNG, JPEG, SVG, SVG Tini (for Illustrator), PDF and EPS.</p>

          <p>Note that you will also be able to make a custom download, choosing not only one of the formats mentioned above but also from a variety of file sizes: 512x512, 1024x1024, 2048x2048 and 4096x4096.</p>

          <p>You can download a QR code as many times as you need. Simply click on “Download” next to the QR code you want to download again and you will be taken to the same screen to select the file format for the download or perform a custom download.</p>


          <p>Now that you know how to download QR codes, we invite you to explore the advantages of the different file formats available in QRFY. This will help you understand when it is most convenient to use each of them.</p>

        </div>
        </div>
</section>

    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
    
        <h4 >How to choose the right format for your QR codes?
        </h4>

        <div className='new-span'>SVG format</div>
          <div className="Dynamic-imger">
          <img src={f1} alt="" />
          </div>
        
      <p>The SVG (Scalable Vector Graphics) format provides high-quality, scalable images, ideal for high-resolution prints such as posters and brochures. Its size adjustment ability without loss of quality makes it perfect to accommodate various design and print size needs. Additionally, its lightness and ease of editing make it a preferred choice for web and digital applications, ensuring optimal performance in online environments. QR codes in SVG format are perfect for use in digital media and for high-quality prints.</p>
        </div>
        </div>
    </section>

    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
        <div className='new-span'>EPS format</div>
          <div className="Dynamic-imger">
          <img src={f2} alt="" />
          </div>
        
      <p>The EPS (Encapsulated PostScript) format excels in professional graphic design and print production environments. Often preferred for its broad compatibility with specialized software and its ability to ensure accurate QR code reproduction across different media. Although EPS files may be larger in size due to their complexity, their robustness and versatility make them a reliable choice for projects that require a high degree of fidelity in the reproduction and manipulation of vector images. QR codes in EPS format are ideal for high-quality prints and for projects that require high fidelity of reproduction.</p>
        </div>
        </div>
    </section>

    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
        <div className='new-span'>JPG format</div>
          <div className="Dynamic-imger">
          <img src={f3} alt="" />
          </div>
        
      <p>The JPG (Joint Photographic Experts Group) format is a widely used image compression standard that stands out for its efficiency in reducing file size. Unlike vector formats like SVG and EPS, JPG is a raster image, meaning it is made up of pixels. It is suitable for online and digital applications where file size is crucial, although compression can result in a loss of quality, so it is not ideal for applications that require high fidelity in QR code reproduction. QR codes in JPG format are suitable for use in digital environments where file size is a priority.

PNG format</p>
        </div>
        </div>
    </section>

    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
        <div className='new-span'>PNG format</div>
          <div className="Dynamic-imger">
          <img src={f4} alt="" />
          </div>
        
      <p>The PNG (Portable Network Graphics) format is popular for its lossless compression and its ability to create images with transparent backgrounds, useful especially on websites. Unlike SVG and EPS formats, PNG is a raster image, meaning it is made up of a grid of pixels. This ensures sharp reproduction of details and colors, making it ideal for images with subtle gradients or transparencies. On the other hand, the PNG format is widely supported by a variety of software and platforms, making it easy to use in different digital environments and applications. QR codes in PNG format are ideal for use on websites and for applications that require transparency.</p>
        </div>
        </div>
    </section>

    <section className='Updating  '>
    <div className="contanir">
        <div className="main-Dynamic">
        <div className='new-span'>PDF format
        </div>
          <div className="Dynamic-imger">
          <img src={f5} alt="" />
          </div>
        
      <p>The PDF (Portable Document Format) format is prized for its ability to store documents accurately and compactly, making it a reliable choice for QR codes and other graphic elements. By creating a QR code in PDF format, you ensure high-quality, faithful reproduction on a variety of devices and print sizes. Additionally, PDF is easily accessible and shareable, making it easy to use in different contexts and applications.</p>
        </div>
        </div>
    </section>

    </>
  )

}

export default Updating4