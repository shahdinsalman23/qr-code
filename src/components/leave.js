import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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

const Leave = () => {










    return (
        <>
            <section className='Leave'>
                <div className="contanir">
                    <div className="main-Leave">
                        <div className="Leave-tital">
                            <h2>Do not leave with doubt</h2>
                        </div>

                        <div className="Leave-box">
                            <div className="Leave-tab-box">
                                <Tabs>

                                    <div className="Leave-tab-list">
                                        <TabList>

                                            <Tab >
                                                Basic information
                                            </Tab>
                                            <Tab >
                                                Design & creation
                                            </Tab>
                                            <Tab >
                                                can & print
                                            </Tab>

                                        </TabList>


                                        <div className=" Leave-tab-boxing">
                                            <TabPanel>

                                                <div className="Everything-faq-box more-faq">


                                                    <Accordion allowZeroExpanded>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    What is a QR code generator?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <p>It is a tool that allows you to generate different types of QR codes, in an easy and intuitive way. The rise of QR codes has made our QR code generator sought after and required by many people and businesses, with businesses of all kinds: you can use our QR code generator to create QR codes for your website, share a PDF, a photo gallery, a playlist, a price list or menu, connect your customers with a service available in your business (WiFi network, attention, shifts, payments, etc.), advertise shows or other events on public roads through the link to the trailer or trailer, create a vCard with contact information and share it with your customers, and much more.</p>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Are QR codes free?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Our qr code generator has a free trial version for seven days: the QR codes you generate are yours forever. From there, if you are satisfied with the product, you can access the plan that best suits your needs. By contracting the service, you will have unlimited access to all the functions: unlimited dynamic and editable QR creation, all the variety of QR types, QR editing and management, unlimited scans, complete analytics of your QRs and a variety of download formats.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    So can I create an account to generate free QR codes?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Of course, the first seven days are on us so you can try our QR code generator for free.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Why on other web pages making QR codes is free?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                This is because our QR codes are dynamic rather than static. All the QR codes that are generated with QRfy host the information on our servers such as PDF documents, Videos, Images and have a cost for that reason they are not free.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can the generated QR codes be used for commercial purposes?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                The use of QR codes is today part of the marketing strategy of many companies. Do not hesitate: use the codes you generate on our platform to renew, give visibility and dynamism to your business.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    What kind of information can be stored in a QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                QR codes can store a wide variety of information, adapting to what you need, since the URL can redirect the user to the type of content you want with just a scan: a website, a PDF, a photo gallery, a playlist, price lists, menus, technical service, WiFi network, shift platform, payment links, videos, contact information, etc. The possibilities are limitless.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Do QR codes have a scan counter?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Yes. If you sign up for a plan, you can track the number of scans your QR codes receive. This way you will be able to observe the progress of your campaigns and even make the necessary adjustments to improve or expand them.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    For how long are the QR valid? Do they expire?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                QR codes do not have an expiration date. They will only stop working if you change or remove the link. However, you have the option to create dynamic codes, so you can replace the content or links when you need to
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    What is the difference between a static and dynamic QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Static QR codes are those that cannot be edited and their scans cannot be tracked. On the other hand, dynamic codes allow you to make changes even after they have been generated: update their content, change their aesthetics, modify links and correct various types of errors. The latter also allow you to track the number of scans.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I manage the codes with the QR code generator?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Of course. When you have signed up for one of our plans, you can manage your QR codes as you wish: create, design, save, delete or modify your codes as you wish, add logos, frames, generate a domain, save your favorite designs, edit URLs And many other things.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                    </Accordion>
                                                </div>
                                                <div className="main-know-box">


                                                    <div className="know-box">
                                                        <h2>Want to know more?</h2>
                                                        <p>Check our FAQs to find an answer to any questions you</p>
                                                        <p>may have about our QR codes.</p>
                                                        <button>Answer all your questions</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>

                                                <div className="Everything-faq-box more-faq">


                                                    <Accordion allowZeroExpanded>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I create QR codes in color or just in black and white?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                You can choose the colors that you want! In our QR creator you will be able to select from a wide range of #RRGGBB notation colors. There you can find not only the colors of your company, but also adjust them to the aesthetics of your campaign and, why not, give free rein to your imagination to combine them as you wish.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I change or edit a QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Our service will allow you to modify the content, correct typos or change the link, even after generating the QR code. We know that many times customers find errors or decide to make modifications, so we give them the possibility to edit, without having to generate a new QR code. To do this, you can go to the “My Qrs” section and select the one you want to edit: you can change its content as many times as you need, except if you decide to change the type of design.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I include the isotype or logo of my company in a QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Of course! This will make your QR an active part of your company's merchandising, making it more attractive and recognizable to your customers. You can take advantage of the free version for seven days and try this option in our QR code generator.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>


                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I create more than one QR code for the same content?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Of course! It is possible to generate 40 different versions of QR codes for any given entry, each with four levels of correction and eight levels of masking. Our qr code generator will choose the best version based on the amount of data stored and readability, in order to produce the best possible image. In addition, you can customize the different versions of your QR with our design tool.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>



                                                    </Accordion>
                                                </div>
                                                <div className="main-know-box">


                                                    <div className="know-box">
                                                        <h2>Want to know more?</h2>
                                                        <p>Check our FAQs to find an answer to any questions you</p>
                                                        <p>may have about our QR codes.</p>
                                                        <button>Answer all your questions</button>
                                                    </div>
                                                </div>
                                            </TabPanel>





                                            <TabPanel>

                                                <div className="Everything-faq-box more-faq">


                                                    <Accordion allowZeroExpanded>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    What should I do before printing my QR code?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>

                                                                To avoid costly mistakes in your marketing campaign, it is necessary that you verify, before printing, that your QR code works correctly.

                                                                <ul>
                                                                    <li>Check that the chosen colors have a good contrast, so that legibility is optimal. Remember that it is essential that the foreground is always darker than the background.</li>
                                                                    <li>Check that there are no errors in the information contained in your QR code (URL, e-mail, text, map, etc.)</li>
                                                                    <li>Test your QR by scanning it from devices with different operating systems</li>
                                                                    <li>We also recommend that, before printing it, you verify that the function or purpose of the QR code is clear in the presentation: The client must know what they should scan it for.</li>
                                                                </ul>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    In what graphic formats can QR codes be made?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                After registering on our page, you will have the option to download your codes in various formats: high resolution JPG, PNG, SVG or EPS.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Is there a limit to the number of scans for QR codes?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                No. QR codes can be scanned an unlimited number of times.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    How to read or scan a QR code with my smartphone?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                Many iPhone and Android devices already have a built-in QR code reader.
                                                                <ul>
                                                                    <li>To access this function, just open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen.</li>
                                                                    <li>In case this does not happen, go to settings, to check that QR scanning is enabled.</li>
                                                                    <li>If you don't have the feature, just download and install a QR code reader from your app store (most are free!).</li>

                                                                </ul>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Can I scan QR codes without an app?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <ul>
                                                                    <li>Most iOS and Android devices have a QR code scanner built into the camera itself. Simply open the camera app and hold it over any code until a notification appears.</li>
                                                                    <li>If you don't want to download an app, you can search the web for an online reader. These are usually free and decode the QR directly from the browser.</li>
                                                                </ul>
                                                            </AccordionItemPanel>

                                                        </AccordionItem>

                                                        <AccordionItem>

                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    Why is my QR code not working?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                This can happen for different reasons. The code may be blurry or the scanner may not detect it because there is not enough contrast between the code and the background. You must remember that it is essential that the foreground is always darker than the background. In case of any difficulty, do not hesitate to contact us.
                                                            </AccordionItemPanel>

                                                        </AccordionItem>


                                                    </Accordion>
                                                </div>
                                                <div className="main-know-box">


                                                    <div className="know-box">
                                                        <h2>Want to know more?</h2>
                                                        <p>Check our FAQs to find an answer to any questions you</p>
                                                        <p>may have about our QR codes.</p>
                                                        <button>Answer all your questions</button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </div>


                                    </div>


                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Leave