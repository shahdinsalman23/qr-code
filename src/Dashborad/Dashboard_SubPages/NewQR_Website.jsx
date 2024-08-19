// NewQR_Website.js INNER 
import React from 'react';
import DeviceHover from '../../img/Device hover.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Pencel from '../../img/NewQrPencel.png'
import ClockIcon from '../../img/website_clokcicon.png'
import infoicon from '../../img/website_ifnoicon.png'
import statsicon from '../../img/Website_stats.png'
import Questionmarkicon from '../../img/website_quesmark.png'
import settingsicon from '../../img/Website_settingicon.png'
import WebsiteDevice from '../../img/WebsiteDevice.png'
import { Container } from 'react-bootstrap';



const NewQR_Website = () => {

  return (
    <>
      <Container>
        <div className='NewQR'>
          <div className="NewQr-Website-header">
            <h1>Complete the content of the QR</h1>

            <div className="NewQr-Website-header--ImgSec">

              <h2>Website</h2>
              <span>
                <img src={Pencel} alt="pen" />
              </span>
            </div>
          </div>


          <div className="main-content--b--flex">
            <div className="main-content--b--website">
              <div className="main-content--b--website--input">
                <input type="text" id="fname" name="fname" placeholder='Name of your QR code...' />

              </div>

              <div className="NewQR-Website-faq-box">
                <Accordion allowZeroExpanded id="accordionPanelsStayOpenExample" preExpanded={['basicInfo']}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--clock">
                          <img src={ClockIcon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Time Scheduling</h2>
                          <p>Create the time changes for your bussiness and then apply them  to your products</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <p>Enable time ranges</p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem uuid="basicInfo" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <AccordionItemHeading>
                      <AccordionItemButton >

                        <div className="NewQR-Website-faq-box--info">
                          <img src={infoicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Basic Information</h2>
                          <p>Add essiential information</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>

                      <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <p>Multi Language support</p>
                        <img src={Questionmarkicon} alt="Questionmarkicon" />
                      </div>

                      <div className="NewQR-Website-faq-box--websiteurl">
                        <h3>Website URL</h3>
                        <input type="text" placeholder="Enter website URL" />
                        <button>Edit Parameters</button>
                      </div>

                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={statsicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Stats</h2>
                          <p>Key tools and data to evaluate performance.</p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>



                      <div className="Stats--inner--faq-box">
                        <Accordion allowZeroExpanded>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Schedule a date

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                              <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable time ranges</p>
                              </div>


                              <input type="date" id="Calender" ></input>
                              <input type="date" id="Calender" ></input>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                URL Configuration

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>


                              <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable time ranges</p>
                              </div>

                            <div className="website--des">
                              <p> URL</p>
                              <input type="text" placeholder="Enter website URL" className='w-100' />
                              </div>

                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Scan Limit

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <p>Limit the number of times your QR can be scanned in total.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable Scan Limit</p>
                              </div>

                            <div className="website--des">
                              <input type="text" placeholder="Enter website URL" className='w-100' />
                              </div>

                            </AccordionItemPanel>
                          </AccordionItem>



                        </Accordion>
                      </div>


                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>

                        <div className="NewQR-Website-faq-box--info">
                          <img src={settingsicon} alt="clock" />
                        </div>
                        <div className="NewQR-Website-faq-box--text">
                          <h2>Configuration</h2>
                          <p>Customize settings to optimize your experience.</p>
                        </div>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                        </svg>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                     <div className="Configuration--inner--faq-box">


                    <div className="Stats--inner--faq-box">
                        <Accordion allowZeroExpanded>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Folder

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                              <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable time ranges</p>
                              </div>


                              <input type="date" id="Calender" ></input>
                              <input type="date" id="Calender" ></input>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Domain

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>


                              <p>Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable time ranges</p>
                              </div>

                            <div className="website--des">
                              <p> URL</p>
                              <input type="text" placeholder="Enter website URL" className='w-100' />
                              </div>

                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                  <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>

                                Password

                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <p>Limit the number of times your QR can be scanned in total.</p>
                              <div class="form-check form-switch" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <p>Enable Scan Limit</p>
                              </div>

                            <div className="website--des">
                              <input type="text" placeholder="Enter website URL" className='w-100' />
                              </div>

                            </AccordionItemPanel>
                          </AccordionItem>



                        </Accordion>
                      </div>
                     </div>

                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>
              </div>
            </div>


            <div className="main-content--b--image">
              <img src={WebsiteDevice} alt="Device Hover" />

              <p>IMPORTANT: Remember that you can preview and test your QR codes by clicking on the icon</p>
            </div>



          </div>


        </div>
      </Container>

    </>
  );
};

export default NewQR_Website;

