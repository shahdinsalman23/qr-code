import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';
import { Container } from 'react-bootstrap';
import step1 from '../img/step1.png';
import step2 from '../img/step2.png';
import step3 from '../img/step3.png';






const Generator = () => {










  return (
    <>
      <section className='Generator'>
      <Container>
          <div className="main-Generator">
            <div className="Generator-tital">
              <h2>QR Code Generator: Create your free QR Code</h2>
              <p>Customize it with your color, shape and logo in 3 simple steps.</p>
            </div>

            <div className="Generator-box">
              <div className="Generator-ab">
                <span className='no1'>1</span>
                <span className='no2'>2</span>
                <span className='no3'>3</span>
              </div>

              <div className="Generator-gr-box">

                <div className="Generator-gr-card">
                  <div className="gr-card-tital">
                    <h2>Choose the content of your QR code</h2>
                    <p>Select from a wide variety of options: <br />
                      PDF, menu, video, business cards, web, </p>
                    <p>apps, etc.</p>
                  </div>

                  <div className="gr-card-img">
                    <img src={step1} alt="" />
                  </div>
                </div>

                <div className="Generator-gr-card">

                  <div className="gr-card-img">
                    <img src={step2} alt="" />
                  </div>

                  <div className="gr-card-tital more-style">
                    <h2>Customise and design it as you like</h2>
                    <p>Fill in all the information and use our QR <br />
                      generator to get a unique design.</p>
                  </div>


                </div>


                <div className="Generator-gr-card">
                  <div className="gr-card-tital">
                    <h2>Download your QR code</h2>
                    <p>Get your QR code in different formats <br />
                      (pdf, png, svg), print it or show it in a <br />
                      digital format and voila!
                    </p>
                  </div>

                  <div className="gr-card-img">
                    <img src={step3} alt="" />
                  </div>
                </div>
                <div className="Generator-gr-btn">
                  <button>
                    Create QR code
                  </button>
                </div>
              </div>

            </div>
          </div>
          </Container>
      </section>


    </>
  )

}

export default Generator