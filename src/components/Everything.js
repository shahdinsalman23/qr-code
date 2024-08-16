import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';
// import step1 from '../img/steps1.svg';
// import step2 from '../img/steps2.svg';
// import step3 from '../img/steps.svg';
import everything from '../img/Everythin-pic.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container } from 'react-bootstrap';

const Everything = () => {










    return (
        <>
            <section className='Everything'>
            <Container>
                    <div className="min-Everything">
                        <div className="Everything-tital">
                            <h2>Everything you need to know to get started</h2>
                            <p>In this section you will find the basic concepts and the necessary steps to start </p>
                            <p>enjoying the benefits of using QR.   </p>
                        </div>

                        <div className="Everything-box">
                            <div className="Everything-imger">
                                <img src={everything} alt="" />
                            </div>

                            <div className="Everything-faq-box">
                                <Accordion allowZeroExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>

                                                What is a QR code?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                                </svg>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                The term “QR” stands for “quick response” and refers to instant access to the information
                                                contained in the Code. It is, in short, the evolution of the barcode, made up of patterns of
                                                black and white pixels. <span> Denso Wave</span>, a Japanese subsidiary of Toyota Denso, developed them
                                                in order to mark the components of their cars and thus speed up logistics in their production.
                                                Currently, it has gained great popularity, due to its versatility and accessibility, thanks to the
                                                functions of smart phones.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Know the benefits of using QR
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                                </svg>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>

                                                You will have noticed that more and more companies choose to include QR, as a fundamental resource for the marketing and commercialization of their products and services. Its growing popularity is due to the multiplicity of uses that you can give it: to receive payments from your clients, share links to web pages, catalogs and price lists, receive comments on your products or services, invite the client to share images or videos , promote your business events and much more, with just a scan!
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>

                                                How to start using QR?

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                                </svg>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>

                                                Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>


                                </Accordion>
                            </div>
                        </div>
                    </div>
                    </Container>
            </section>
        </>
    )

}

export default Everything